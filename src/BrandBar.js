import React from 'react';
import classNames from 'classnames';

import AccountMenu from './account/Menu';
import { BrandbarLogo, PoweredByLogo } from './Branding';
import { useData } from './BrandingContext';

export default function BrandBar({ className, navItems, accountMenuItems, activeApp }) {
  return (
    <nav className={classNames('navbar navbar-expand-lg', className)}>
      <a
        className="navbar-brand"
        href="/"
      >
        <BrandbarLogo />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars white-text"></i>
      </button>
      <div
        id="navbar"
        className="collapse navbar-collapse navbar-nav-container"
      >
        <ul className="navbar-nav">
          <BrandBarItems
            activeApp={activeApp}
          />
          {navItems}
        </ul>
        <ul className="navbar-nav">
          <div className="d-flex top-right">
          <AccountMenu items={accountMenuItems} />
          <li className="nav-item">
            <a
              href="https://alces-flight.com/"
              className="link"
              target="_blank"
            >
              <PoweredByLogo />
            </a>
          </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

function BrandBarItems({ className, activeApp }) {
  const data = useData();
  const hasApps = Array.isArray(data('apps')) && data('apps').length;
  const hasPacks = Array.isArray(data('config_packs')) && data('config_packs').length;

  const dropdownItems = (data('apps') || []).map(function(app, i) {
      const title = app.short_title || app.title;
      return (
        <a
          key={i}
          className={classNames(`nav-link nav-menu-button white-text`, {'active': title === activeApp})}
          href={app.path}
        >
	       {title.toUpperCase()}
	     </a>
      )
  });

  const appsLinks = (
    <li className={ classNames("nav-item", {"bordered-nav-item": hasPacks}) }>
      <div className="btn-group">
        {dropdownItems}
      </div>
    </li>
  );

  const packsLink = (
    <li className="nav-item">
      <a
        className="nav-link nav-menu-button white-text"
        href={data('config_packs_link.path') || "/config-packs"}
      >
        {data('config_packs_link.text').toUpperCase() || "CONFIG PACKS"}
      </a>
    </li>

  );

  return (
    <>
    { hasApps ? appsLinks : null }
    { hasPacks ? packsLink : null }
    </>
  );
}
