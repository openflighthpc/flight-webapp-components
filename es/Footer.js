import React from 'react';

function Footer() {
  var year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer border-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted float-left"
  }, "Copyright ", year, " openflightHPC")));
}

export default Footer;