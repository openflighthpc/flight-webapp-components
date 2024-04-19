import React, { useEffect } from 'react';
import classNames from 'classnames';
import { FormFeedback, FormText } from 'reactstrap';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
var styles = {
  "formFeedback": "feedback-module__formFeedback___pNN0w",
  "formFeedback_base": "feedback-module__formFeedback_base___2S9g7"
};
import { useSignIn } from './actions';
import { useBranding } from '../BrandingContext';

function setErrorsFromResponse(setError) {
  return function (body, response) {
    if (response.status === 403) {
      var message = "Your username or password has not been recognised.";
      setError("base", {
        type: "manual",
        message: message
      });
    } else if (response.status === 404 || response.status === 502 || response.status == null) {
      var _message = "Unable to contact login service.";
      setError("base", {
        type: "manual",
        message: _message
      });
    } else {
      var _message2 = "Unexpected error when contacting login service.";
      setError("base", {
        type: "manual",
        message: _message2
      });
    }
  };
}

var defaultFormText = "\n  Sign in to your Flight Solo environment. You'll need your account username and password. \n  Contact your HPC administrator if you don't have these details or need a reminder.\n";

function Form(_ref, apiRef) {
  var formText = _ref.formText,
      login = _ref.login,
      onSubmitting = _ref.onSubmitting,
      onSuccess = _ref.onSuccess,
      submitButton = _ref.submitButton;
  var branding = useBranding();

  var _useForm = useForm({
    mode: 'all'
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      formState = _useForm.formState,
      clearErrors = _useForm.clearErrors,
      setError = _useForm.setError;

  var _useSignIn = useSignIn({
    onError: setErrorsFromResponse(setError),
    onSuccess: onSuccess
  }),
      signIn = _useSignIn.signIn,
      loading = _useSignIn.loading;

  var submit = function submit() {
    clearErrors('base');
    return handleSubmit(signIn).apply(void 0, arguments);
  };

  useEffect(function () {
    onSubmitting(loading);
  }, [loading, onSubmitting]); // API exported by this component to allow for programatic submitting.
  // This is so not the way React functional components are supposed to work,
  // but it does work.

  apiRef.current = {
    submit: submit,
    isSubmitting: loading
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement(FormText, {
    className: "text-muted small-text"
  }, branding('signInModal.text') || defaultFormText), errors.base ? /*#__PURE__*/React.createElement(FormFeedback, {
    className: classNames(styles.formFeedback, styles.formFeedback_base)
  }, errors.base.message) : null, /*#__PURE__*/React.createElement(FormInput, {
    label: "Username",
    name: "login",
    type: "text",
    ref: register,
    formErrors: errors,
    formMeta: formState,
    className: 'login-form-input'
  }), /*#__PURE__*/React.createElement(FormInput, {
    label: "Password",
    name: "password",
    type: "password",
    ref: register,
    formErrors: errors,
    formMeta: formState,
    className: 'login-form-input'
  }), submitButton);
}

export default /*#__PURE__*/React.forwardRef(Form);