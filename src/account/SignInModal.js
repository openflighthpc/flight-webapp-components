import React, { useRef, useState } from 'react'

import StandardModal from './StandardModal';
import StatefulButton from './StatefulButton';
import SignInForm from './SignInForm';
import { useBranding, useEnvironment } from '../BrandingContext';

function SignInModal({
  toggle,
  isOpen,
}) {
  const environment = useEnvironment();
  const envName = environment('environment.name') || 'your environment';
  const branding = useBranding();
  const formText = branding('apps.signInModal.text');
  const formApi = useRef(null); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const submitButton = (
    <StatefulButton
      className="btn btn-primary"
      onClick={() => formApi.current.submit() }
      submitting={isSubmitting}
      type="submit"
    >
      Sign in
    </StatefulButton>
  );

  return (
    <StandardModal
      buttons={submitButton}
      closeButtonText="Cancel"
      isOpen={isOpen}
      title={`Sign in to ${envName}`}
      toggle={toggle}
    >
      <SignInForm
        ref={formApi}
        onSubmitting={setIsSubmitting}
        onSuccess={toggle}
        formText={formText}
      />
    </StandardModal>
  );
}

export default SignInModal;
