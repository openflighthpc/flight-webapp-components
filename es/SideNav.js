import React, { useEffect, useRef } from 'react';
import { useData } from './BrandingContext';

function SideNav() {
  var data = useData();
  var sidebar = data('sidebar');
  var ref = useRef();
  useEffect(function () {
    if (ref.current && sidebar != null && sidebar !== "") {
      ref.current.outerHTML = sidebar;
    }
  });
  return /*#__PURE__*/React.createElement("aside", {
    ref: ref,
    className: "sidenav col-12 col-md-3 col-lg-2"
  });
}

export default SideNav;