import React from 'react';
import classNames from 'classnames';

import AccountMenu from './account/Menu';
import { BrandbarLogo, BrandbarHomeNav } from './Branding';
import { useData } from './BrandingContext';

export default function BrandBar({ className, navItems }) {
  return (
    <nav className={classNames('navbar navbar-expand-lg navbar-light bg-white', className)}>
      <a
        className="navbar-brand"
        href="/"
      >
        <BrandbarLogo />
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <BrandbarHomeNav />
          <BrandBarItems />
        </ul>
        <ul className="navbar-nav">
          <AccountMenu />
        </ul>
      </div>
    </nav>
  );
}

function BrandBarItems({ className }) {
  const data = useData();
  const hasApps = Array.isArray(data('apps')) && data('apps').length;
  const hasPacks = Array.isArray(data('config_packs')) && data('config_packs').length;

  const appsLink = (
    <li className="nav-item">
      <a
        className="nav-link nav-menu-button"
        href="/apps"
      >
        Web Suite
      </a>
    </li>
  );
  const packsLink = (
    <li className="nav-item">
      <a
        className="nav-link nav-menu-button"
        href="/config-packs"
      >
        Config Packs
      </a>
    </li>

  );

  return (
    <>
    { hasApps ? appsLink : null }
    { hasPacks ? packsLink : null }
    </>
  );
}
