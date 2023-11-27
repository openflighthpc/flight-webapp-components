import React from 'react';
import classNames from 'classnames';

import DefaultBrandbarLogo from '../dist/images/openflighthpc_nav.png';
import { useBranding, useData, useEnvironment } from './BrandingContext';

export function BrandbarLogo() {
  const branding = useBranding();
  const logo = branding('brandbar.logo') || {
    url: DefaultBrandbarLogo,
    alt: "OpenflightHPC Logo",
  };

  return (
    <img
      alt={logo.alt}
      className={classNames(logo.classNames, 'branding-brandbar-logo')}
      src={logo.url}
    />
  );
}

export function BrandbarHomeNav() {
  const data = useData();
  const branding = useBranding();
  const environment = useEnvironment();

  return (
    <li className="nav-item">
      <a
        className="nav-link nav-menu-button"
        href={data('home_link.path') || "/"}
      >
        {
          data('home_link.text') ||
          branding('brandbar.home_link.text') ||
            environment('environment.name') ||
            environment('organisation.name') ||
            'Home'
        }
      </a>
    </li>
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
