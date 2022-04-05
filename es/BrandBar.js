import React from 'react';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
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
    className: "collapse navbar-collapse navbar-nav-container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement(BrandbarHomeNav, null), /*#__PURE__*/React.createElement(BrandBarItems, null), navItems), /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement(AccountMenu, null))));
}

function BrandBarItems(_ref2) {
  var className = _ref2.className;
  var data = useData();
  var hasApps = Array.isArray(data('apps')) && data('apps').length;
  var hasPacks = Array.isArray(data('config_packs')) && data('config_packs').length;
  var toggleCss = {
    display: "flex",
    alignItems: "center"
  };
  var dropdownItems = data('apps').map(function (app, i) {
    return /*#__PURE__*/React.createElement(Dropdown.Item, {
      href: app.path
    }, " ", app.short_title || app.title, " ");
  });
  var appsLink = /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    as: ButtonGroup
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link nav-menu-button",
    href: data('apps_link.path') || "/apps"
  }, data('apps_link.text') || "Web Suite"), /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    as: "a",
    type: "button",
    style: toggleCss,
    split: true
  }), /*#__PURE__*/React.createElement(Dropdown.Menu, null, dropdownItems)));
  var packsLink = /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link nav-menu-button",
    href: data('config_packs_link.path') || "/config-packs"
  }, data('config_packs_link.text') || "Config Packs"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasApps ? appsLink : null, hasPacks ? packsLink : null);
}