"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactstrap = require("reactstrap");

var _reactHookForm = require("react-hook-form");

var _FormInput = _interopRequireDefault(require("./FormInput"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "formFeedback": "feedback-module__formFeedback___pNN0w",
  "formFeedback_base": "feedback-module__formFeedback_base___2S9g7"
};

function setErrorsFromResponse(setError) {
  return function (body, response) {
    if (response.status === 403) {
      var message = "Your username or password has not been recognised.";
      setError("login", {
        type: "manual",
        message: message
      });
      setError("password", {
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

function Form(_ref, apiRef) {
  var formText = _ref.formText,
      login = _ref.login,
      onSubmitting = _ref.onSubmitting,
      onSuccess = _ref.onSuccess;

  var _useForm = (0, _reactHookForm.useForm)({
    mode: 'all'
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      formState = _useForm.formState,
      clearErrors = _useForm.clearErrors,
      setError = _useForm.setError;

  var _useSignIn = (0, _actions.useSignIn)({
    onError: setErrorsFromResponse(setError),
    onSuccess: onSuccess
  }),
      signIn = _useSignIn.signIn,
      loading = _useSignIn.loading;

  var submit = function submit() {
    clearErrors('base');
    return handleSubmit(signIn).apply(void 0, arguments);
  };

  var modalText = formText || "\n    Sign in to your OpenFlightHPC environment account.  You'll need your\n    account username and password.  Contact your HPC administrator if you\n    don't have these details or need a reminder.\n  ";
  (0, _react.useEffect)(function () {
    onSubmitting(loading);
  }, [loading, onSubmitting]); // API exported by this component to allow for programatic submitting.
  // This is so not the way React functional components are supposed to work,
  // but it does work.

  apiRef.current = {
    submit: submit,
    isSubmitting: loading
  };
  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.FormText, {
    className: "mb-2"
  }, formText), errors.base ? /*#__PURE__*/_react["default"].createElement(_reactstrap.FormFeedback, {
    className: (0, _classnames["default"])(styles.formFeedback, styles.formFeedback_base)
  }, errors.base.message) : null, /*#__PURE__*/_react["default"].createElement(_FormInput["default"], {
    label: "Enter your username",
    name: "login",
    type: "text",
    ref: register,
    formErrors: errors,
    formMeta: formState
  }), /*#__PURE__*/_react["default"].createElement(_FormInput["default"], {
    label: "Enter your password",
    name: "password",
    type: "password",
    ref: register,
    formErrors: errors,
    formMeta: formState
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "d-none"
  }));
}

var _default = /*#__PURE__*/_react["default"].forwardRef(Form);

exports["default"] = _default;