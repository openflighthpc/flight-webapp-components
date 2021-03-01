"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  utils: true,
  ErrorBoundary: true,
  ConfigContext: true,
  ConfigProvider: true,
  AnimatedRouter: true,
  AuthenticatedRoute: true,
  BrandBar: true,
  ConfirmedActionButton: true,
  FetchProvider: true,
  Footer: true,
  FullscreenButton: true,
  Spinner: true,
  UnauthorizedError: true,
  useEventListener: true,
  CurrentUserContext: true,
  CurrentUserProvider: true
};
Object.defineProperty(exports, "ErrorBoundary", {
  enumerable: true,
  get: function get() {
    return _ErrorBoundary["default"];
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _ConfigContext.Context;
  }
});
Object.defineProperty(exports, "ConfigProvider", {
  enumerable: true,
  get: function get() {
    return _ConfigContext.Provider;
  }
});
Object.defineProperty(exports, "AnimatedRouter", {
  enumerable: true,
  get: function get() {
    return _AnimatedRouter["default"];
  }
});
Object.defineProperty(exports, "AuthenticatedRoute", {
  enumerable: true,
  get: function get() {
    return _AuthenticatedRoute["default"];
  }
});
Object.defineProperty(exports, "BrandBar", {
  enumerable: true,
  get: function get() {
    return _BrandBar["default"];
  }
});
Object.defineProperty(exports, "ConfirmedActionButton", {
  enumerable: true,
  get: function get() {
    return _ConfirmedActionButton["default"];
  }
});
Object.defineProperty(exports, "FetchProvider", {
  enumerable: true,
  get: function get() {
    return _FetchProvider["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "FullscreenButton", {
  enumerable: true,
  get: function get() {
    return _FullscreenButton["default"];
  }
});
Object.defineProperty(exports, "Spinner", {
  enumerable: true,
  get: function get() {
    return _Spinner["default"];
  }
});
Object.defineProperty(exports, "UnauthorizedError", {
  enumerable: true,
  get: function get() {
    return _UnauthorizedError["default"];
  }
});
Object.defineProperty(exports, "useEventListener", {
  enumerable: true,
  get: function get() {
    return _useEventListener["default"];
  }
});
Object.defineProperty(exports, "CurrentUserContext", {
  enumerable: true,
  get: function get() {
    return _CurrentUserContext.Context;
  }
});
Object.defineProperty(exports, "CurrentUserProvider", {
  enumerable: true,
  get: function get() {
    return _CurrentUserContext.Provider;
  }
});
exports.utils = void 0;

var _utils = _interopRequireWildcard(require("./utils"));

exports.utils = _utils;

var _Branding = require("./Branding");

Object.keys(_Branding).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Branding[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Branding[key];
    }
  });
});

var _BrandingContext = require("./BrandingContext");

Object.keys(_BrandingContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _BrandingContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BrandingContext[key];
    }
  });
});

var _ErrorBoundary = _interopRequireWildcard(require("./ErrorBoundary"));

Object.keys(_ErrorBoundary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ErrorBoundary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ErrorBoundary[key];
    }
  });
});

var _Overlay = require("./Overlay");

Object.keys(_Overlay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Overlay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Overlay[key];
    }
  });
});

var _useMedia = require("./useMedia");

Object.keys(_useMedia).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMedia[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useMedia[key];
    }
  });
});

var _ConfigContext = require("./ConfigContext");

var _AnimatedRouter = _interopRequireDefault(require("./AnimatedRouter"));

var _AuthenticatedRoute = _interopRequireDefault(require("./AuthenticatedRoute"));

var _BrandBar = _interopRequireDefault(require("./BrandBar"));

var _ConfirmedActionButton = _interopRequireDefault(require("./ConfirmedActionButton"));

var _FetchProvider = _interopRequireDefault(require("./FetchProvider"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _FullscreenButton = _interopRequireDefault(require("./FullscreenButton"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

var _UnauthorizedError = _interopRequireDefault(require("./UnauthorizedError"));

var _useEventListener = _interopRequireDefault(require("./useEventListener"));

var _CurrentUserContext = require("./account/CurrentUserContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }