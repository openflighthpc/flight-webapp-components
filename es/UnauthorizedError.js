import React from 'react';

function UnauthorizedError() {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h3", null, "Unauthorized"), /*#__PURE__*/React.createElement("p", null, "There was a problem authorizing your username and password.  Please check that they are entered correctly and try again.")));
}

export default UnauthorizedError;