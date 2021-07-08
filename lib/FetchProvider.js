"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useClearCache = useClearCache;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useHttp = require("use-http");

var _ConfigContext = require("./ConfigContext");

var _CurrentUserContext = require("./account/CurrentUserContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function FetchProvider(_ref) {
  var children = _ref.children,
      cachePolicy = _ref.cachePolicy;

  var _useContext = (0, _react.useContext)(_ConfigContext.Context),
      apiRootUrl = _useContext.apiRootUrl;

  var _useContext2 = (0, _react.useContext)(_CurrentUserContext.Context),
      currentUser = _useContext2.currentUser;

  var options = {
    // We can't make use of the cache until it is possible to clear it when
    // the user signs out.
    //
    // cachePolicy: cachePolicy || 'cache-first',
    // cacheLife: 1 * 60 * 1000,  /* 1 minute in milliseconds. */
    cachePolicy: 'no-cache',
    cacheLife: 0,
    interceptors: {
      // Options can be modified and must be returned.
      request: function () {
        var _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
          var options;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = _ref2.options;

                  if (currentUser) {
                    if (options.headers == null) {
                      options.headers = {};
                    }

                    options.headers.Authorization = currentUser.authToken;
                  }

                  return _context.abrupt("return", options);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function request(_x) {
          return _request.apply(this, arguments);
        }

        return request;
      }()
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_useHttp.Provider, {
    options: options,
    url: apiRootUrl
  }, /*#__PURE__*/_react["default"].createElement(CacheClearer, null), children);
}

function useClearCache() {
  var _useFetch = (0, _useHttp.useFetch)({
    persist: false
  }),
      memoryCache = _useFetch.cache;

  var _useFetch2 = (0, _useHttp.useFetch)({
    persist: true,
    cachePolicy: 'cache-first'
  }),
      storageCache = _useFetch2.cache;

  return function () {
    memoryCache.clear();
    storageCache.clear();
  };
} // This is a separate component than FetchProvider so that it is rendered
// inside of `use-http`'s `Provider`.


function CacheClearer() {
  var clearCache = useClearCache();
  (0, _react.useEffect)(function () {
    window.addEventListener('signout', function () {
      clearCache();
    });
  }, []);
  return null;
}

var _default = FetchProvider;
exports["default"] = _default;