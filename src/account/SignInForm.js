import React, { useEffect } from 'react';
import classNames from 'classnames';
import { FormFeedback, FormText } from 'reactstrap';
import { useForm } from 'react-hook-form';

import FormInput from './FormInput';
import styles from './feedback.module.css';
import { useSignIn } from './actions';
import { useBranding } from '../BrandingContext';

function setErrorsFromResponse(setError) {
  return function(body, response) {
    if (response.status === 403) {
      const message = "Your username or password has not been recognised.";
      setError("base", { type: "manual", message });
    } else if (response.status === 404 || response.status === 502 || response.status == null) {
      const message = "Unable to contact login service.";
      setError("base", { type: "manual", message });
    } else {
      const message = "Unexpected error when contacting login service.";
      setError("base", { type: "manual", message });
    }
  }
}

const defaultFormText = `
  Sign in to your Flight Solo environment. You'll need your account username and password. 
  Contact your HPC administrator if you don't have these details or need a reminder.
`;

function Form({ formText, login, onSubmitting, onSuccess, submitButton, }, apiRef) {
  const branding = useBranding();
  const { register, handleSubmit, errors, formState, clearErrors, setError } = useForm({
    mode: 'all',
  });
  const { signIn, loading } = useSignIn({
    onError: setErrorsFromResponse(setError),
    onSuccess: onSuccess,
  });
  const submit = (...args) => {
    clearErrors('base');
    return handleSubmit(signIn)(...args);
  };

  useEffect(() => { onSubmitting(loading); }, [loading, onSubmitting]);

  // API exported by this component to allow for programatic submitting.
  // This is so not the way React functional components are supposed to work,
  // but it does work.
  apiRef.current = {
    submit: submit,
    isSubmitting: loading,
  };

  return (
    <form onSubmit={submit}>
      <FormText className="text-muted small-text">
	{branding('signInModal.text') || defaultFormText}
      </FormText>
      {
        errors.base ?
          (
            <FormFeedback
              className={
                classNames(styles.formFeedback, styles.formFeedback_base)}
              >
                {errors.base.message}
              </FormFeedback>
          ):
          null
      }
      <FormInput
        label="Username"
        name="login"
        type="text"
        ref={register}
        formErrors={errors}
        formMeta={formState}
        className={'login-form-input'}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        ref={register}
        formErrors={errors}
        formMeta={formState}
        className={'login-form-input'}
      />
      {submitButton}
    </form>
  );
}

export default React.forwardRef(Form);
