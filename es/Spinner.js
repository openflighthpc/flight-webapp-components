import React from 'react';

function Spinner(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-spinner fa-spin mr-1"
  }), text);
}

export default Spinner;