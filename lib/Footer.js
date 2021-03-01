"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Footer() {
  var year = new Date().getFullYear();
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "footer border-top"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-muted float-left"
  }, "Copyright ", year, " openflightHPC")));
}

var _default = Footer;
exports["default"] = _default;