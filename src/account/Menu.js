import React, { useContext, useState } from 'react';

import { Context as CurrentUserContext } from './CurrentUserContext';

import SignInModal from './SignInModal';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function AccountMenu({ items }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [ showSignInModal, setShowSignInModal ] = useState(false);
  const signedInItems = typeof(items) === 'undefined' ? [] : items.signedIn

  const modals = (
    <SignInModal
      isOpen={showSignInModal}
      toggle={() => setShowSignInModal(false) }
    />
  );

  if (currentUser) {
    return (
      <>
      <SignedIn currentUser={currentUser} items={signedInItems} />
      {modals}
      </>
    );
  }
  return (
    <>
    <SignedOut
      onClick={(evt) => {
        setShowSignInModal(true);
        evt.preventDefault();
      }}
    />
    {modals}
    </>
  );
}
