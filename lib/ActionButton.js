"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ActionButton(_ref) {
  var act = _ref.act,
      acting = _ref.acting,
      actingButtonText = _ref.actingButtonText,
      buttonText = _ref.buttonText,
      className = _ref.className,
      color = _ref.color,
      icon = _ref.icon,
      size = _ref.size;
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    className: (0, _classnames["default"])("btn", className, _defineProperty({}, acting, 'disabled')),
    color: color,
    disabled: acting,
    onClick: act,
    size: size
  }, acting ? /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-spinner fa-spin mr-1"
  }) : /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa ".concat(icon, " mr-1")
  }), /*#__PURE__*/_react["default"].createElement("span", null, acting ? actingButtonText : buttonText));
}

var _default = ActionButton;
exports["default"] = _default;