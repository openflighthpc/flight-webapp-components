import React from 'react';
export default function SignedOut(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: "ml-3 btn btn-success mr-1 pl-3 pr-4 text-uppercase font-weight-bold",
    type: "submit",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("i", {
    className: "px-1 fa fa-user"
  }), "Log in");
}