import React from 'react';
import classNames from 'classnames';

export default function ProductBar({ className, navItems }) {
  return (
    <nav className={
      classNames('navbar navbar-expand-lg productbar navbar-dark', className)
    }>
      <div className="collapse navbar-collapse navbar-nav-container">
        <ul className="navbar-nav">
          {navItems}
        </ul>
      </div>
    </nav>
  );
}
