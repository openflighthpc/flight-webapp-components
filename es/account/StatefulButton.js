function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Button } from "reactstrap";

var StatefulButton = function StatefulButton(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      submitting = _ref.submitting,
      submittingText = _ref.submittingText,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "submitting", "submittingText"]);

  var content;

  if (submitting) {
    content = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-spinner fa-spin"
    }), ' ', submittingText || 'Submitting...');
  } else {
    content = children;
  }

  return /*#__PURE__*/React.createElement(Button, _extends({
    disabled: disabled || submitting
  }, props), content);
};

export default StatefulButton;