import React from 'react';
import classNames from 'classnames';
import AccountMenu from './account/Menu';
import { BrandbarLogo, PoweredByLogo } from './Branding';
import { useData } from './BrandingContext';
export default function BrandBar(_ref) {
  var className = _ref.className,
      navItems = _ref.navItems,
      accountMenuItems = _ref.accountMenuItems,
      activeApp = _ref.activeApp;
  return /*#__PURE__*/React.createElement("nav", {
    className: classNames('navbar navbar-expand-lg', className)
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand",
    href: "/"
  }, /*#__PURE__*/React.createElement(BrandbarLogo, null)), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbar",
    "aria-controls": "navbar",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bars white-text"
  })), /*#__PURE__*/React.createElement("div", {
    id: "navbar",
    className: "collapse navbar-collapse navbar-nav-container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement(BrandBarItems, {
    activeApp: activeApp
  }), navItems), /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex top-right"
  }, /*#__PURE__*/React.createElement(AccountMenu, {
    items: accountMenuItems
  }), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://alces-flight.com/",
    className: "link",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(PoweredByLogo, null)))))));
}

function BrandBarItems(_ref2) {
  var className = _ref2.className,
      activeApp = _ref2.activeApp;
  var data = useData();
  var hasApps = Array.isArray(data('apps')) && data('apps').length;
  var hasPacks = Array.isArray(data('config_packs')) && data('config_packs').length;
  var dropdownItems = (data('apps') || []).map(function (app, i) {
    var title = app.short_title || app.title;
    return /*#__PURE__*/React.createElement("a", {
      className: classNames("nav-link nav-menu-button white-text", {
        'active': title === activeApp
      }),
      href: app.path
    }, title.toUpperCase());
  });
  var appsLinks = /*#__PURE__*/React.createElement("li", {
    className: classNames("nav-item", {
      "bordered-nav-item": hasPacks
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-group"
  }, dropdownItems));
  var packsLink = /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link nav-menu-button white-text",
    href: data('config_packs_link.path') || "/config-packs"
  }, data('config_packs_link.text').toUpperCase() || "CONFIG PACKS"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasApps ? appsLinks : null, hasPacks ? packsLink : null);
}