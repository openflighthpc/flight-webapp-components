"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = Provider;
exports.Context = void 0;

var _react = _interopRequireDefault(require("react"));

var _useHttp = _interopRequireDefault(require("use-http"));

var _Spinner = require("./Spinner");

var _ErrorBoundary = require("./ErrorBoundary");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = null;

var Context = /*#__PURE__*/_react["default"].createContext(initialState);

exports.Context = Context;

function Provider(_ref) {
  var children = _ref.children;

  var _useFetch = (0, _useHttp["default"])(process.env.REACT_APP_CONFIG_FILE, []),
      error = _useFetch.error,
      loading = _useFetch.loading,
      data = _useFetch.data;

  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(_Spinner.AppLoadingSpinner, null);
  } else if (error && error.message === "Not Found") {
    return /*#__PURE__*/_react["default"].createElement(Context.Provider, {
      value: {
        unconfigured: true
      }
    }, children);
  } else if (error) {
    return /*#__PURE__*/_react["default"].createElement(_ErrorBoundary.DefaultErrorMessage, null);
  } else {
    return /*#__PURE__*/_react["default"].createElement(Context.Provider, {
      value: data
    }, children);
  }
}