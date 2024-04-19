import React from 'react';
import { useBranding } from './BrandingContext';
import { FooterLogo, Cloud } from './Branding';

function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, footerContent());

  function footerContent() {
    var branding = useBranding();

    if (branding("copyright")) {
      var year = branding("copyright.year");
      var text = branding("copyright.text");
      return /*#__PURE__*/React.createElement("div", {
        className: "container border-top"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-muted float-left"
      }, "\xA9 ", year, " ", text));
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cloud, {
        side: "l"
      }), /*#__PURE__*/React.createElement("a", {
        href: "/"
      }, /*#__PURE__*/React.createElement(FooterLogo, null)), /*#__PURE__*/React.createElement("a", {
        href: "https://www.openflighthpc.org/latest/docs/",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-solid fa-book"
      })), /*#__PURE__*/React.createElement("a", {
        href: "https://github.com/openflighthpc",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-brands fa-github"
      })), /*#__PURE__*/React.createElement(Cloud, {
        side: "r"
      }));
    }
  }
}

export default Footer;