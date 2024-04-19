"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SignedOut;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SignedOut(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "button link white-text mr-4",
    type: "submit",
    onClick: onClick
  }, "LOG IN"));
}