function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import classNames from 'classnames';
import jsGravatar from 'js-gravatar';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
var styles = {
  "DropdownToggle": "styles-module__DropdownToggle___1X_XD",
  "inlineButton": "styles-module__inlineButton___2jwhT",
  "userBlock": "styles-module__userBlock___Xd39U"
};
import { useSignOut } from './actions';
var signedInLinks = [];

function SignedIn(_ref) {
  var currentUser = _ref.currentUser;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var signOut = useSignOut();

  var toggle = function toggle() {
    return setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };

  var avatarUrl = currentUser.avatarUrl;

  if (avatarUrl == null) {
    // XXX Can we use the cluster name here?
    var email = currentUser.email ? currentUser.email : "".concat(currentUser.username, "@localhost");
    avatarUrl = jsGravatar({
      email: email,
      size: 48,
      defaultImage: 'identicon'
    });
  }

  return /*#__PURE__*/React.createElement(Dropdown, {
    isOpen: dropdownOpen,
    toggle: toggle,
    className: "align-self-center"
  }, /*#__PURE__*/React.createElement(DropdownToggle, {
    tag: "a",
    className: classNames("nav nav-link dropdown-toggle px-4 d-inline-flex", styles.DropdownToggle),
    id: "account-menu"
  }, /*#__PURE__*/React.createElement("span", {
    className: classNames("align-self-center mr-2 user-block", styles.userBlock, {
      'user-name--null': currentUser.name == null
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-weight-bold user-name"
  }, currentUser.name || /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "d-inline-block float-right user-username"
  }, currentUser.username)), /*#__PURE__*/React.createElement("span", {
    className: "align-self-center user-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "Gravatar",
    src: avatarUrl
  }))), /*#__PURE__*/React.createElement(DropdownMenu, null, signedInLinks.map(function (link) {
    return /*#__PURE__*/React.createElement(Link, _extends({
      key: link.href
    }, link));
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    className: "nav nav-link dropdown-item",
    onClick: signOut,
    style: {
      cursor: 'pointer'
    },
    tag: "a"
  }, "Log out")));
}

function Link(_ref2) {
  var href = _ref2.href,
      text = _ref2.text;
  return /*#__PURE__*/React.createElement(DropdownItem, {
    href: href,
    className: "nav nav-link"
  }, text);
}

export default SignedIn;