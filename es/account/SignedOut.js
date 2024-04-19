import React from 'react';
export default function SignedOut(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "button link white-text mr-4",
    type: "submit",
    onClick: onClick
  }, "LOG IN"));
}