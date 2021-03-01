"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function UnauthorizedError() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Unauthorized"), /*#__PURE__*/_react["default"].createElement("p", null, "There was a problem authorizing your username and password.  Please check that they are entered correctly and try again.")));
}

var _default = UnauthorizedError;
exports["default"] = _default;