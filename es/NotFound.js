import React from 'react';

function NotFound(_ref) {
  var homeLink = _ref.homeLink;
  var HomeLink = homeLink;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-wrap d-flex flex-row align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display-1 d-block"
  }, "404"), /*#__PURE__*/React.createElement("div", {
    className: "mb-4 lead"
  }, "This is not the page you are looking for!"), /*#__PURE__*/React.createElement(HomeLink, null)))));
}

export default NotFound;