import React from 'react';
import classNames from 'classnames';

import DefaultBrandbarLogo from '../dist/images/openflighthpc_nav.png';
import PoweredByAlces from '../dist/images/poweredby_white.png';
import { useBranding } from './BrandingContext';

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

export function PoweredByLogo() {
  return (
    <img
      alt="Powered by Alces Flight"
      className='branding-brandbar-logo'
      src={PoweredByAlces}
    />
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
