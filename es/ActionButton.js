function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import { Button } from 'reactstrap';

function ActionButton(_ref) {
  var act = _ref.act,
      acting = _ref.acting,
      actingButtonText = _ref.actingButtonText,
      buttonText = _ref.buttonText,
      className = _ref.className,
      color = _ref.color,
      icon = _ref.icon,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(Button, {
    className: classNames("btn", className, _defineProperty({}, acting, 'disabled')),
    color: color,
    disabled: acting,
    onClick: act,
    size: size
  }, acting ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-spinner fa-spin mr-1"
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fa ".concat(icon, " mr-1")
  }), /*#__PURE__*/React.createElement("span", null, acting ? actingButtonText : buttonText));
}

export default ActionButton;