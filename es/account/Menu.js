function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useState } from 'react';
import { Context as CurrentUserContext } from './CurrentUserContext';
import SignInModal from './SignInModal';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
export default function AccountMenu() {
  var _useContext = useContext(CurrentUserContext),
      currentUser = _useContext.currentUser;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSignInModal = _useState2[0],
      setShowSignInModal = _useState2[1];

  var modals = /*#__PURE__*/React.createElement(SignInModal, {
    isOpen: showSignInModal,
    toggle: function toggle() {
      return setShowSignInModal(false);
    }
  });

  if (currentUser) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SignedIn, {
      currentUser: currentUser
    }), modals);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SignedOut, {
    onClick: function onClick(evt) {
      setShowSignInModal(true);
      evt.preventDefault();
    }
  }), modals);
}