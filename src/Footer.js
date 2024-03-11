import React from 'react';

import { useBranding } from './BrandingContext';
import { FooterLogo, Cloud } from './Branding';

function Footer() {
  return (
    <footer>
      {footerContent()}
    </footer>
  );

  function footerContent() {
    const branding = useBranding();

    if (branding("copyright")) {
      const year = branding("copyright.year");
      const text = branding("copyright.text");
      return (
        <div className="container border-top">
          <span className="text-muted float-left">
            &copy; {year} {text}
          </span>
        </div>
      )
    } else {
      return (
        <>
          <Cloud
            side="l"
          />
          <a
            href="/"
          >
            <FooterLogo />
          </a>
          <a href="https://www.openflighthpc.org/latest/docs/" target="_blank">
            <i className="fa fa-solid fa-book"></i>
          </a>
          <a href="https://github.com/openflighthpc" target="_blank">
            <i className="fa fa-brands fa-github"></i>
          </a>
          <Cloud
            side="r"
          />
        </>
      )
    }
  }
}

export default Footer;
