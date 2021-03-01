"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BrandBar;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Menu = _interopRequireDefault(require("./account/Menu"));

var _Branding = require("./Branding");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function BrandBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: (0, _classnames["default"])('navbar navbar-expand-lg navbar-light bg-white', className)
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "navbar-brand",
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement(_Branding.BrandbarLogo, null)), /*#__PURE__*/_react["default"].createElement(_Branding.BrandbarText, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "collapse navbar-collapse"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navbar-nav mr-auto"
  }, navItems), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], null))));
}