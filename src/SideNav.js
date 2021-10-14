import React, { useEffect, useRef } from 'react';

import { useData } from './BrandingContext';

function SideNav() {
  const data = useData();
  const sidebar = data('sidebar');
  const ref = useRef();
  useEffect(() => {
    if (ref.current && sidebar != null && sidebar !== "") {
      ref.current.outerHTML = sidebar;
    }
  });

  return (
    <aside
      ref={ref}
      className="sidenav col-12 col-md-3 col-lg-2"
    />
  );
}

export default SideNav;
