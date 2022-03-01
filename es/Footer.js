import React from 'react';
import { useBranding } from './BrandingContext';

function Footer() {
  var branding = useBranding();
  var year = branding("copyright.year") || new Date().getFullYear();
  var text = branding("copyright.text") || "openflightHPC";
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer border-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted float-left"
  }, "\xA9 ", year, " ", text)));
}

export default Footer;