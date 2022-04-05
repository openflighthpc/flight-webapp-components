import React from 'react';
import classNames from 'classnames';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
      <div className="collapse navbar-collapse navbar-nav-container">
        <ul className="navbar-nav">
          <BrandbarHomeNav />
          <BrandBarItems />
          {navItems}
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

  const toggleCss = {
    display: "flex",
    alignItems: "center"
  };

  const dropdownItems = data('apps').map(function(app, i) {
      return <DropdownItem href={app.path}> {app.short_title || app.title} </DropdownItem>
  });

  const [dropdownOpen, setOpen] = React.useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const appsLink = (
    <li className="nav-item">
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <a
          className="nav-link nav-menu-button"
          href={data('apps_link.path') || "/apps"}
        >
          {data('apps_link.text') || "Web Suite"}
        </a>

        <DropdownToggle tag={"a"} type="button" style={toggleCss} split />

        <DropdownMenu>
	  {dropdownItems}
        </DropdownMenu>
      </ButtonDropdown>
    </li>
  );

  const packsLink = (
    <li className="nav-item">
      <a
        className="nav-link nav-menu-button"
        href={data('config_packs_link.path') || "/config-packs"}
      >
        {data('config_packs_link.text') || "Config Packs"}
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
