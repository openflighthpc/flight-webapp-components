import React from 'react';
import classNames from 'classnames';

import DefaultBrandbarLogo from '../dist/images/png_trans_logo-navbar.png';
import DefaultDashboardLogo from '../dist/images/png_trans_logo.png';
import { useBranding, useEnvironment } from './BrandingContext';

export function BrandbarLogo() {
  const branding = useBranding();
  const logo = branding('brandbar.logo') || {
    url: DefaultBrandbarLogo,
    alt: "OpenflightHPC Logo",
    height: "75"
  };

  return (
    <img
      alt={logo.alt}
      className={classNames(logo.classNames, 'branding-brandbar-logo')}
      src={logo.url}
      height={logo.height}
    />
  );
}

export function BrandbarHomeNav() {
  const branding = useBranding();
  const environment = useEnvironment();

  return (
    <li className="nav-item">
      <a
        className="nav-link nav-menu-button"
        href="/"
      >
        {
          branding('brandbar.home_link_text') ||
            environment('environment.name') ||
            environment('organisation.name') ||
            'Home'
        }
      </a>
    </li>
  );
}

export function DashboardLogo() {
  const branding = useBranding();
  const logo = branding('apps.dashboard.logo') || {
    url: DefaultDashboardLogo,
    alt: "OpenflightHPC Logo",
  };

  return (
    <div className="branding-apps-dashboard-logo-wrapper">
      <img
        alt={logo.alt}
        className={classNames(
          'logo',
          logo.classNames,
          'branding-apps-dashboard-logo'
        )}
        src={logo.url}
      />
    </div>
  );
}

// function UnbreakableImg({ src }) {
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
