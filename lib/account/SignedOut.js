"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SignedOut;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SignedOut(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "ml-3 btn btn-success mr-1 pl-3 pr-4 text-uppercase font-weight-bold",
    type: "submit",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "px-1 fa fa-user"
  }), "Log in");
}