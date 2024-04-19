"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function StandardModal(_ref) {
  var buttons = _ref.buttons,
      children = _ref.children,
      isOpen = _ref.isOpen,
      size = _ref.size,
      title = _ref.title,
      toggle = _ref.toggle,
      rest = _objectWithoutProperties(_ref, ["buttons", "children", "isOpen", "size", "title", "toggle"]);

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Modal, _extends({
    isOpen: isOpen,
    size: size,
    toggle: toggle,
    centered: true
  }, rest), /*#__PURE__*/_react["default"].createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'header'
  }, title, /*#__PURE__*/_react["default"].createElement("a", {
    className: 'close-button text-muted',
    onClick: toggle
  }, "X")), children, buttons));
}

var _default = StandardModal;
exports["default"] = _default;