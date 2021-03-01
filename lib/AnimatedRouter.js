"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _classnames = _interopRequireDefault(require("classnames"));

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AnimatedRouter(_ref) {
  var AuthenticatedRoute = _ref.AuthenticatedRoute,
      Redirect = _ref.Redirect,
      Route = _ref.Route,
      exact = _ref.exact,
      routes = _ref.routes,
      sideNav = _ref.sideNav;
  var SideNav = sideNav;
  var pageRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (pageRef.current != null) {
      // Add this class when the app first renders.  Afterwards, the
      // CSSTransition component will add it and remove it as needed.
      pageRef.current.classList.add('page-enter-done');
    }
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, routes.map(function (_ref2) {
    var path = _ref2.path,
        Component = _ref2.Component,
        authenticated = _ref2.authenticated,
        sideNav = _ref2.sideNav;
    var MyRoute = authenticated ? AuthenticatedRoute : Route;
    return /*#__PURE__*/_react["default"].createElement(MyRoute, {
      Redirect: Redirect,
      Route: Route,
      exact: exact,
      key: path,
      path: path
    }, function (_ref3) {
      var match = _ref3.match;
      return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
        "in": match != null,
        timeout: 300,
        classNames: "page",
        unmountOnExit: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "page row",
        ref: pageRef
      }, /*#__PURE__*/_react["default"].createElement(_ErrorBoundary["default"], null, sideNav ? /*#__PURE__*/_react["default"].createElement(SideNav, null) : null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("centernav mt-4 col-12", {
          "col-md-9": sideNav,
          "col-lg-8": sideNav,
          "offset-md-0": sideNav,
          "offset-lg-0": sideNav,
          "mt-4": sideNav
        })
      }, /*#__PURE__*/_react["default"].createElement(Component, null)), sideNav ? /*#__PURE__*/_react["default"].createElement(SideNav, null) : null)));
    });
  }));
}

var _default = AnimatedRouter;
exports["default"] = _default;