"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppLoadingSpinner = AppLoadingSpinner;
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Spinner(_ref) {
  var text = _ref.text,
      _ref$center = _ref.center,
      center = _ref$center === void 0 ? 'horizontal' : _ref$center,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])({
      'text-center': center === 'horizontal',
      'vertical-center': center === 'vertical',
      'both-center': center === 'both'
    }),
    style: {
      fontSize: size
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-spinner fa-spin mr-1"
  }), text);
}

function AppLoadingSpinner() {
  return /*#__PURE__*/_react["default"].createElement(Spinner, {
    text: "Loading...",
    center: "both",
    size: "x-large"
  });
}

var _default = Spinner;
exports["default"] = _default;