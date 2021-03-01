"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = Overlay;
exports.OverlayContainer = OverlayContainer;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Overlay(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "position-absolute",
    style: {
      fontSize: 'x-large',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-light px-3 rounded",
    style: {
      background: 'rgba(108, 117, 125, 0.75)'
    }
  }, children));
} // A small positioned container that results in the overlay being rendered
// pretty much in place.


function OverlayContainer(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '3em',
      left: 0,
      right: 0,
      position: 'absolute'
    }
  }, children);
}

var _default = Overlay;
exports["default"] = _default;