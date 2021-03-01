"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Spinner(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-spinner fa-spin mr-1"
  }), text);
}

var _default = Spinner;
exports["default"] = _default;