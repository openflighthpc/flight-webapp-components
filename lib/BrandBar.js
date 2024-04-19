"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BrandBar;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Menu = _interopRequireDefault(require("./account/Menu"));

var _Branding = require("./Branding");

var _BrandingContext = require("./BrandingContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function BrandBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems,
      accountMenuItems = _ref.accountMenuItems,
      activeApp = _ref.activeApp;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: (0, _classnames["default"])('navbar navbar-expand-lg', className)
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "navbar-brand",
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement(_Branding.BrandbarLogo, null)), /*#__PURE__*/_react["default"].createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbar",
    "aria-controls": "navbar",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-bars white-text"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    id: "navbar",
    className: "collapse navbar-collapse navbar-nav-container"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement(BrandBarItems, {
    activeApp: activeApp
  }), navItems), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex top-right"
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    items: accountMenuItems
  }), /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://alces-flight.com/",
    className: "link",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_Branding.PoweredByLogo, null)))))));
}

function BrandBarItems(_ref2) {
  var className = _ref2.className,
      activeApp = _ref2.activeApp;
  var data = (0, _BrandingContext.useData)();
  var hasApps = Array.isArray(data('apps')) && data('apps').length;
  var hasPacks = Array.isArray(data('config_packs')) && data('config_packs').length;
  var dropdownItems = (data('apps') || []).map(function (app, i) {
    var title = app.short_title || app.title;
    return /*#__PURE__*/_react["default"].createElement("a", {
      className: (0, _classnames["default"])("nav-link nav-menu-button white-text", {
        'active': title === activeApp
      }),
      href: app.path
    }, title.toUpperCase());
  });

  var appsLinks = /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _classnames["default"])("nav-item", {
      "bordered-nav-item": hasPacks
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "btn-group"
  }, dropdownItems));

  var packsLink = /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link nav-menu-button white-text",
    href: data('config_packs_link.path') || "/config-packs"
  }, data('config_packs_link.text').toUpperCase() || "CONFIG PACKS"));

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, hasApps ? appsLinks : null, hasPacks ? packsLink : null);
}