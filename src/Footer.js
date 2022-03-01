import React from 'react';

import { useBranding } from './BrandingContext';

function Footer() {
  const branding = useBranding();
  const year = branding("copyright.year") || new Date().getFullYear();
  const text = branding("copyright.text") || "openflightHPC";

  return (
    <footer className="footer border-top">
      <div className="container">
        <span className="text-muted float-left">
          &copy; {year} {text}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
