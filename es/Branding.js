import React from 'react';
import classNames from 'classnames';
import DefaultBrandbarLogo from '../dist/images/web_suite.png';
import DefaultFooterLogo from '../dist/images/openflighthpc_footer.png';
import PoweredByAlces from '../dist/images/poweredby_white.png';
import LeftCloud from '../dist/images/parting_cloud_l.png';
import RightCloud from '../dist/images/parting_cloud_r.png';
import { useBranding } from './BrandingContext';
export function BrandbarLogo() {
  var branding = useBranding();
  var logo = branding('brandbar.logo') || {
    url: DefaultBrandbarLogo,
    alt: "Flight Web Suite Logo"
  };
  return /*#__PURE__*/React.createElement("img", {
    alt: logo.alt,
    className: classNames(logo.classNames, 'branding-brandbar-logo'),
    src: logo.url
  });
}
export function FooterLogo() {
  var branding = useBranding();
  var logo = branding('brandbar.logo') || {
    url: DefaultFooterLogo,
    alt: "OpenflightHPC Logo"
  };
  return /*#__PURE__*/React.createElement("img", {
    alt: logo.alt,
    id: "footer-logo",
    src: logo.url
  });
}
export function PoweredByLogo() {
  return /*#__PURE__*/React.createElement("img", {
    alt: "Powered by Alces Flight",
    className: "top-right-logo",
    src: PoweredByAlces
  });
}
export function Cloud(props) {
  var side = props['side'];
  var id = "cloud-".concat(side);
  var src;

  if (side === 'l') {
    src = LeftCloud;
  } else {
    src = RightCloud;
  }

  return /*#__PURE__*/React.createElement("img", {
    alt: "",
    id: id,
    className: "cloud",
    src: src
  });
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