"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CurrentUserContext = require("./CurrentUserContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Provider renders without crashing', function () {
  (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_CurrentUserContext.Provider, null, /*#__PURE__*/_react["default"].createElement("div", null, "Some children")));
});