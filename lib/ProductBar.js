"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProductBar;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ProductBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: (0, _classnames["default"])('navbar navbar-expand-lg navbar-dark bg-dark productbar', className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "collapse navbar-collapse"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navbar-nav mr-auto"
  }, navItems)));
}