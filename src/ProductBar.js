import React from 'react';
import classNames from 'classnames';

export default function ProductBar({ className, navItems }) {
  return (
    <nav className={
      classNames('navbar navbar-expand-lg productbar navbar-dark', className)
    }>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {navItems}
        </ul>
      </div>
    </nav>
  );
}
