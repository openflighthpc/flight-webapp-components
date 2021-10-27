import React from 'react';
import classNames from 'classnames';
import AccountMenu from './account/Menu';
import { BrandbarLogo, BrandbarHomeNav } from './Branding';
import { useData } from './BrandingContext';
export default function BrandBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems;
  return /*#__PURE__*/React.createElement("nav", {
    className: classNames('navbar navbar-expand-lg navbar-light bg-white', className)
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand",
    href: "/"
  }, /*#__PURE__*/React.createElement(BrandbarLogo, null)), /*#__PURE__*/React.createElement("div", {
    className: "collapse navbar-collapse"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, /*#__PURE__*/React.createElement(BrandbarHomeNav, null), /*#__PURE__*/React.createElement(BrandBarItems, null)), /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement(AccountMenu, null))));
}

function BrandBarItems(_ref2) {
  var className = _ref2.className;
  var data = useData();
  var hasApps = Array.isArray(data('apps')) && data('apps').length;
  var hasPacks = Array.isArray(data('config_packs')) && data('config_packs').length;
  var appsLink = /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link nav-menu-button",
    href: data('apps_link.path') || "/apps"
  }, data('apps_link.text') || "Web Suite"));
  var packsLink = /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link nav-menu-button",
    href: data('config_packs_link.path') || "/config-packs"
  }, data('config_packs_link.text') || "Config Packs"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasApps ? appsLink : null, hasPacks ? packsLink : null);
}