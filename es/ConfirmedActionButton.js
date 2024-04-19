function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

function ConfirmedActionButton(_ref) {
  var act = _ref.act,
      acting = _ref.acting,
      actingButtonText = _ref.actingButtonText,
      buttonText = _ref.buttonText,
      _ref$cancelButtonText = _ref.cancelButtonText,
      cancelButtonText = _ref$cancelButtonText === void 0 ? "Cancel" : _ref$cancelButtonText,
      className = _ref.className,
      confirmationHeaderText = _ref.confirmationHeaderText,
      confirmationText = _ref.confirmationText,
      icon = _ref.icon,
      id = _ref.id;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var toggle = function toggle() {
    return setModal(!modal);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActionButton, null), /*#__PURE__*/React.createElement(Modal, {
    className: "card-text",
    isOpen: modal,
    toggle: toggle,
    centered: true
  }, /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement("h3", {
    className: "mb-4"
  }, confirmationHeaderText), confirmationText, /*#__PURE__*/React.createElement("div", {
    className: "d-flex mt-4 justify-content-center"
  }, /*#__PURE__*/React.createElement("a", {
    className: "button link white-text mr-3",
    onClick: function onClick() {
      toggle();
      act();
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: "fa ".concat(icon, " mr-1")
  }) : null, buttonText), /*#__PURE__*/React.createElement("a", {
    className: "cancel-button button link blue-text mr-3",
    onClick: toggle
  }, cancelButtonText)))));

  function ActionButton() {
    var buttonContents = /*#__PURE__*/React.createElement(React.Fragment, null, acting ? /*#__PURE__*/React.createElement("i", {
      className: "fa fa-spinner fa-spin mr-1"
    }) : icon ? /*#__PURE__*/React.createElement("i", {
      className: "fa ".concat(icon, " mr-1")
    }) : null, acting ? actingButtonText : buttonText);
    return /*#__PURE__*/React.createElement(Button, {
      className: "".concat(acting ? 'disabled' : null, " ").concat(className),
      disabled: acting,
      id: id,
      onClick: toggle
    }, buttonContents);
  }
}

export default ConfirmedActionButton;