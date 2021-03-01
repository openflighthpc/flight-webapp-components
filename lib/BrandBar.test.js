"use strict";

var _BrandBar = _interopRequireDefault(require("./BrandBar"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _react2 = require("@testing-library/react");

var _CurrentUserContext = require("./CurrentUserContext");

var _ConfigContext = require("./ConfigContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('renders without crashing', function () {
  (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_ConfigContext.Context.Provider, {
    value: {
      clusterName: 'A cluster'
    }
  }, /*#__PURE__*/_react["default"].createElement(_CurrentUserContext.Context.Provider, {
    value: {
      currentUser: null,
      actions: {}
    }
  }, /*#__PURE__*/_react["default"].createElement(_BrandBar["default"], null)))));
});