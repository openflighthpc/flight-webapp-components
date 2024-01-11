import React, { useRef, useState } from 'react'

import StandardModal from './StandardModal';
import StatefulButton from './StatefulButton';
import SignInForm from './SignInForm';
import { useEnvironment } from '../BrandingContext';

function SignInModal({
  toggle,
  isOpen,
}) {
  const environment = useEnvironment();
  const envName = environment('environment.name') || 'your environment';
  const formApi = useRef(null); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const submitButton = (
    <>
      <StatefulButton
        className="button link white-text"
        onClick={() => formApi.current.submit() }
        submitting={isSubmitting}
        type="submit"
      >
        LOG IN
      </StatefulButton>
    </>

  );

  return (
    <StandardModal
      buttons={submitButton}
      closeButtonText="Cancel"
      isOpen={isOpen}
      title={<h2>Log in to <strong className={'blue-text'}>{envName}</strong></h2>}
      toggle={toggle}
      size={'lg'}
    >
      <SignInForm
        ref={formApi}
        onSubmitting={setIsSubmitting}
        onSuccess={toggle}
      />
    </StandardModal>
  );
}

export default SignInModal;
