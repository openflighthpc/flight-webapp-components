"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsGravatar = _interopRequireDefault(require("js-gravatar"));

var _reactstrap = require("reactstrap");

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = {
  "DropdownToggle": "styles-module__DropdownToggle___1X_XD",
  "inlineButton": "styles-module__inlineButton___2jwhT",
  "userBlock": "styles-module__userBlock___Xd39U"
};

function SignedIn(_ref) {
  var currentUser = _ref.currentUser,
      items = _ref.items;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var signOut = (0, _actions.useSignOut)();

  var toggle = function toggle() {
    return setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };

  var signedInLinks = items;
  var avatarUrl = currentUser.avatarUrl;

  if (avatarUrl == null) {
    // XXX Can we use the cluster name here?
    var email = currentUser.email ? currentUser.email : "".concat(currentUser.username, "@localhost");
    avatarUrl = (0, _jsGravatar["default"])({
      email: email,
      size: 48,
      defaultImage: 'identicon'
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Dropdown, {
    isOpen: dropdownOpen,
    toggle: toggle,
    className: "align-self-center"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
    tag: "a",
    className: (0, _classnames["default"])("nav nav-link dropdown-toggle px-4 d-inline-flex", styles.DropdownToggle),
    id: "account-menu"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])("align-self-center mr-2 user-block", styles.userBlock, {
      'user-name--null': currentUser.name == null
    })
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-weight-bold user-name"
  }, currentUser.name || /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-inline-block float-right user-username"
  }, currentUser.username)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "align-self-center user-avatar"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "Gravatar",
    src: avatarUrl
  }))), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, null, signedInLinks, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
    className: "nav nav-link dropdown-item",
    onClick: signOut,
    style: {
      cursor: 'pointer'
    },
    tag: "a"
  }, "Log out")));
}

var _default = SignedIn;
exports["default"] = _default;