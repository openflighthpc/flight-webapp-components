import React, { useState } from 'react';
import classNames from 'classnames';
import jsGravatar from 'js-gravatar';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import styles from './styles.module.css';
import { useSignOut } from './actions';

function SignedIn({ currentUser, items }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const signOut = useSignOut();
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const signedInLinks = items;

  let avatarUrl = currentUser.avatarUrl;
  if (avatarUrl == null) {
    // XXX Can we use the cluster name here?
    const email = currentUser.email ? currentUser.email : `${currentUser.username}@localhost`;
    avatarUrl = jsGravatar({ email: email, size: 48, defaultImage: 'identicon' });
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="a"
        className={
          classNames(
            "nav nav-link dropdown-toggle no-caret d-inline-flex white-text",
            styles.DropdownToggle
          )
        }
        id="account-menu"
      >
        <span
          className={
            classNames(
              "align-self-center mr-2 user-block",
              styles.userBlock,
              { 'user-name--null': currentUser.name == null },
            )
          }
        >
          <span className="font-weight-bold user-name">
            { currentUser.name || <React.Fragment>&nbsp;</React.Fragment> }
          </span><br />
          <span className="d-inline-block float-right user-username">
            { currentUser.username }
          </span>
        </span>
        <span className="align-self-center user-avatar">
          <img
            alt="Gravatar"
            src={avatarUrl}
          />
        </span>
      </DropdownToggle>
      <DropdownMenu>
        { signedInLinks }
        <DropdownItem
          className="nav nav-link white-text"
          onClick={signOut}
          style={{ cursor: 'pointer' }}
          tag="a"
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SignedIn;
