"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEnvironment = exports.useBranding = exports.EnvironmentProvider = exports.EnvironmentContext = exports.BrandingProvider = exports.BrandingContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useHttp = _interopRequireDefault(require("use-http"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

var _ErrorBoundary = require("./ErrorBoundary");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function makeDataContext(url) {
  var initialState = null;

  var Context = /*#__PURE__*/_react["default"].createContext(initialState);

  return {
    Context: Context,
    Provider: Provider,
    useData: useData
  };

  function Provider(_ref) {
    var children = _ref.children;

    var _useFetch = (0, _useHttp["default"])(url, []),
        error = _useFetch.error,
        loading = _useFetch.loading,
        data = _useFetch.data;

    if (loading) {
      return /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
        text: "Loading..."
      });
    } else if (error && error.message === "Not Found") {
      return /*#__PURE__*/_react["default"].createElement(Context.Provider, {
        value: null
      }, children);
    } else if (error) {
      return /*#__PURE__*/_react["default"].createElement(_ErrorBoundary.DefaultErrorMessage, null);
    } else {
      return /*#__PURE__*/_react["default"].createElement(Context.Provider, {
        value: data
      }, children);
    }
  }

  function useData() {
    var data = (0, _react.useContext)(Context);
    return lookup;

    function lookup(dottedKey) {
      var keys = dottedKey.split('.');
      return keys.reduce(function (accum, key) {
        if ((0, _utils.isObject)(accum)) {
          return accum[key];
        } else {
          return null;
        }
      }, data);
    }
  }
}

var _makeDataContext = makeDataContext(process.env.REACT_APP_BRANDING_FILE),
    BrandingContext = _makeDataContext.Context,
    BrandingProvider = _makeDataContext.Provider,
    useBranding = _makeDataContext.useData;

exports.useBranding = useBranding;
exports.BrandingProvider = BrandingProvider;
exports.BrandingContext = BrandingContext;

var _makeDataContext2 = makeDataContext(process.env.REACT_APP_ENVIRONMENT_FILE),
    EnvironmentContext = _makeDataContext2.Context,
    EnvironmentProvider = _makeDataContext2.Provider,
    useEnvironment = _makeDataContext2.useData;

exports.useEnvironment = useEnvironment;
exports.EnvironmentProvider = EnvironmentProvider;
exports.EnvironmentContext = EnvironmentContext;