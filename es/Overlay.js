import React from 'react';

function Overlay(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "position-absolute",
    style: {
      fontSize: 'x-large',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-light px-3 rounded",
    style: {
      background: 'rgba(108, 117, 125, 0.75)'
    }
  }, children));
} // A small positioned container that results in the overlay being rendered
// pretty much in place.


function OverlayContainer(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '3em',
      left: 0,
      right: 0,
      position: 'absolute'
    }
  }, children);
}

export { Overlay, OverlayContainer };
export default Overlay;