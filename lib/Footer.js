"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BrandingContext = require("./BrandingContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Footer() {
  var branding = (0, _BrandingContext.useBranding)();
  var year = branding("copyright.year") || new Date().getFullYear();
  var text = branding("copyright.text") || "openflightHPC";
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "footer border-top"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-muted float-left"
  }, "\xA9 ", year, " ", text)));
}

var _default = Footer;
exports["default"] = _default;