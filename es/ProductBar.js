import React from 'react';
import classNames from 'classnames';
export default function ProductBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems;
  return /*#__PURE__*/React.createElement("nav", {
    className: classNames('navbar navbar-expand-lg productbar navbar-dark', className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "collapse navbar-collapse"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, navItems)));
}