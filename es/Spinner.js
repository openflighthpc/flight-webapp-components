import classNames from 'classnames';
import React from 'react';

function Spinner(_ref) {
  var text = _ref.text,
      _ref$center = _ref.center,
      center = _ref$center === void 0 ? 'horizontal' : _ref$center,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames({
      'text-center': center === 'horizontal',
      'vertical-center': center === 'vertical',
      'both-center': center === 'both'
    }),
    style: {
      fontSize: size
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-spinner fa-spin mr-1"
  }), text);
}

export function AppLoadingSpinner() {
  return /*#__PURE__*/React.createElement(Spinner, {
    text: "Loading...",
    center: "both",
    size: "x-large"
  });
}
export default Spinner;