function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

function StandardModal(_ref) {
  var buttons = _ref.buttons,
      children = _ref.children,
      isOpen = _ref.isOpen,
      size = _ref.size,
      title = _ref.title,
      toggle = _ref.toggle,
      rest = _objectWithoutProperties(_ref, ["buttons", "children", "isOpen", "size", "title", "toggle"]);

  return /*#__PURE__*/React.createElement(Modal, _extends({
    isOpen: isOpen,
    size: size,
    toggle: toggle,
    centered: true
  }, rest), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement("div", {
    className: 'header'
  }, title, /*#__PURE__*/React.createElement("a", {
    className: 'close-button text-muted',
    onClick: toggle
  }, "X")), children, buttons));
}

export default StandardModal;