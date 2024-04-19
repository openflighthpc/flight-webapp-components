"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BrandingContext = require("./BrandingContext");

var _Branding = require("./Branding");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Footer() {
  return /*#__PURE__*/_react["default"].createElement("footer", null, footerContent());

  function footerContent() {
    var branding = (0, _BrandingContext.useBranding)();

    if (branding("copyright")) {
      var year = branding("copyright.year");
      var text = branding("copyright.text");
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container border-top"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "text-muted float-left"
      }, "\xA9 ", year, " ", text));
    } else {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Branding.Cloud, {
        side: "l"
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/"
      }, /*#__PURE__*/_react["default"].createElement(_Branding.FooterLogo, null)), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.openflighthpc.org/latest/docs/",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-solid fa-book"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://github.com/openflighthpc",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-brands fa-github"
      })), /*#__PURE__*/_react["default"].createElement(_Branding.Cloud, {
        side: "r"
      }));
    }
  }
}

var _default = Footer;
exports["default"] = _default;