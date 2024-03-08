import React from 'react';
import classNames from 'classnames';

import DefaultBrandbarLogo from '../dist/images/web_suite.png';
import DefaultFooterLogo from '../dist/images/openflighthpc_footer.png';
import PoweredByAlces from '../dist/images/poweredby_white.png';
import LeftCloud from '../dist/images/parting_cloud_l.png';
import RightCloud from '../dist/images/parting_cloud_r.png';
import { useBranding } from './BrandingContext';

export function BrandbarLogo() {
  const branding = useBranding();
  const logo = branding('brandbar.logo') || {
    url: DefaultBrandbarLogo,
    alt: "Flight Web Suite Logo",
  };

  return (
    <img
      alt={logo.alt}
      className={classNames(logo.classNames, 'branding-brandbar-logo')}
      src={logo.url}
    />
  );
}

export function FooterLogo() {
  const branding = useBranding();
  const logo = branding('brandbar.logo') || {
    url: DefaultFooterLogo,
    alt: "OpenflightHPC Logo",
  };

  return (
    <img
      alt={logo.alt}
      id="footer-logo"
      src={logo.url}
    />
  );
}

export function PoweredByLogo() {
  return (
    <img
      alt="Powered by Alces Flight"
      className='top-right-logo'
      src={PoweredByAlces}
    />
  );
}

export function Cloud(props) {
  const side = props['side'];
  const id = `cloud-${side}`;
  let src;
  if (side === 'l') {
    src = LeftCloud;
  } else {
    src = RightCloud;
  }

  return (
    <img
      alt=""
      id={id}
      className='cloud'
      src={src}
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
