"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NotFound() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-wrap d-flex flex-row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-12 text-center"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "display-1 d-block"
  }, "404"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4 lead"
  }, "This is not the page you are looking for!"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: "btn btn-link",
    to: "/"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Move Along..."))))));
}

var _default = NotFound;
exports["default"] = _default;