"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BrandBar;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

var _ButtonGroup = _interopRequireDefault(require("react-bootstrap/ButtonGroup"));

var _Dropdown = _interopRequireDefault(require("react-bootstrap/Dropdown"));

var _Menu = _interopRequireDefault(require("./account/Menu"));

var _Branding = require("./Branding");

var _BrandingContext = require("./BrandingContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function BrandBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: (0, _classnames["default"])('navbar navbar-expand-lg navbar-light bg-white', className)
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "navbar-brand",
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement(_Branding.BrandbarLogo, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "collapse navbar-collapse navbar-nav-container"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement(_Branding.BrandbarHomeNav, null), /*#__PURE__*/_react["default"].createElement(BrandBarItems, null), navItems), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], null))));
}

function BrandBarItems(_ref2) {
  var className = _ref2.className;
  var data = (0, _BrandingContext.useData)();
  var hasApps = Array.isArray(data('apps')) && data('apps').length;
  var hasPacks = Array.isArray(data('config_packs')) && data('config_packs').length;
  var toggleCss = {
    display: "flex",
    alignItems: "center"
  };
  var dropdownItems = data('apps').map(function (app, i) {
    return /*#__PURE__*/_react["default"].createElement(_Dropdown["default"].Item, {
      href: app.path
    }, " ", app.short_title || app.title, " ");
  });

  var appsLink = /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
    as: _ButtonGroup["default"]
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link nav-menu-button",
    href: data('apps_link.path') || "/apps"
  }, data('apps_link.text') || "Web Suite"), /*#__PURE__*/_react["default"].createElement(_Dropdown["default"].Toggle, {
    as: "a",
    type: "button",
    style: toggleCss,
    split: true
  }), /*#__PURE__*/_react["default"].createElement(_Dropdown["default"].Menu, null, dropdownItems)));

  var packsLink = /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link nav-menu-button",
    href: data('config_packs_link.path') || "/config-packs"
  }, data('config_packs_link.text') || "Config Packs"));

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, hasApps ? appsLink : null, hasPacks ? packsLink : null);
}