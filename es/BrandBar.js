import React from 'react';
import classNames from 'classnames';
import AccountMenu from './account/Menu';
import { BrandbarLogo, BrandbarText } from './Branding';
export default function BrandBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems;
  return /*#__PURE__*/React.createElement("nav", {
    className: classNames('navbar navbar-expand-lg navbar-light bg-white', className)
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand",
    href: "/"
  }, /*#__PURE__*/React.createElement(BrandbarLogo, null)), /*#__PURE__*/React.createElement(BrandbarText, null), /*#__PURE__*/React.createElement("div", {
    className: "collapse navbar-collapse"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, navItems), /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement(AccountMenu, null))));
}