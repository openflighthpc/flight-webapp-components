"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BrandBar;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactstrap = require("reactstrap");

var _Menu = _interopRequireDefault(require("./account/Menu"));

var _Branding = require("./Branding");

var _BrandingContext = require("./BrandingContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function BrandBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems,
      accountMenuItems = _ref.accountMenuItems;
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
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    items: accountMenuItems
  }))));
}

function BrandBarItems(_ref2) {
  var className = _ref2.className;
  var data = (0, _BrandingContext.useData)();
  var hasApps = Array.isArray(data('apps')) && data('apps').length;
  var hasPacks = Array.isArray(data('config_packs')) && data('config_packs').length;
  var dropdownItems = (data('apps') || []).map(function (app, i) {
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
      key: app,
      href: app.path
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "fa fa-solid fa-fw fa-" + app.fa_icon
    }), "\xA0", app.short_title || app.title);
  });

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dropdownOpen = _React$useState2[0],
      setOpen = _React$useState2[1];

  var toggle = function toggle() {
    return setOpen(!dropdownOpen);
  };

  var appsLink = /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.ButtonDropdown, {
    isOpen: dropdownOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link nav-menu-button",
    href: data('apps_link.path') || "/apps"
  }, data('apps_link.text') || "Web Suite"), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
    tag: "a",
    type: "button",
    split: true
  }), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, {
    right: true
  }, dropdownItems)));

  var packsLink = /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link nav-menu-button",
    href: data('config_packs_link.path') || "/config-packs"
  }, data('config_packs_link.text') || "Config Packs"));

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, hasApps ? appsLink : null, hasPacks ? packsLink : null);
}