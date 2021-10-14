import React from 'react';
import classNames from 'classnames';
import DefaultBrandbarLogo from '../dist/images/png_trans_logo-navbar.png';
import DefaultDashboardLogo from '../dist/images/png_trans_logo.png';
import { useBranding, useEnvironment } from './BrandingContext';
export function BrandbarLogo() {
  var branding = useBranding();
  var logo = branding('brandbar.logo') || {
    url: DefaultBrandbarLogo,
    alt: "OpenflightHPC Logo",
    height: "75"
  };
  return /*#__PURE__*/React.createElement("img", {
    alt: logo.alt,
    className: classNames(logo.classNames, 'branding-brandbar-logo'),
    src: logo.url,
    height: logo.height
  });
}
export function BrandbarHomeNav() {
  var branding = useBranding();
  var environment = useEnvironment();
  return /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link nav-menu-button",
    href: "/"
  }, branding('brandbar.home_link_text') || environment('environment.name') || environment('organisation.name') || 'Home'));
}
export function DashboardLogo() {
  var branding = useBranding();
  var logo = branding('apps.dashboard.logo') || {
    url: DefaultDashboardLogo,
    alt: "OpenflightHPC Logo"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "branding-apps-dashboard-logo-wrapper"
  }, /*#__PURE__*/React.createElement("img", {
    alt: logo.alt,
    className: classNames('logo', logo.classNames, 'branding-apps-dashboard-logo'),
    src: logo.url
  }));
}
export function ClusterLogo() {
  var environment = useEnvironment();
  var logo = environment('environment.logo');

  if (logo) {
    return /*#__PURE__*/React.createElement("img", {
      alt: logo.alt,
      className: classNames('logo', logo.classNames),
      src: logo.url
    });
  } else {
    return null;
  }
} // function UnbreakableImg({ src }) {
//   const [ loaded, setLoaded ] = useState(false);
//   const classes = `mw-100 mx-auto mb-3`;
//   return (
//     <img
//       alt=""
//       className={ loaded ? `${classes} d-block` : `${classes} d-none`}
//       src={src}
//       onLoad={() => setLoaded(true)}
//     />
//   );
// }