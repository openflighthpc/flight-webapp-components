"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "formFeedback": "feedback-module__formFeedback___pNN0w",
  "formFeedback_base": "feedback-module__formFeedback_base___2S9g7"
};
var defaultErrorMap = {
  'blank': 'This must not be blank',
  'not_confirmed': 'This field must match the password',
  'invalid': 'This is not a valid value',
  'invalid_login_token': 'This must be either your email address, or your Flight username consisting of lowercase letters, numbers and hyphens (-).',
  'invalid_username_format': 'Usernames can only use lowercase letters, numbers and hypens (-), and must not start with a hyphen.',
  'not_accepted': 'You must accept the terms and conditions to continue.',
  'password_too_weak': 'The password is not strong enough',
  'required': 'This field is required',
  'too_long': 'This is too long',
  'too_short': 'This is too short'
};
defaultErrorMap['must be accepted'] = defaultErrorMap['not_accepted'];

function formattedErrors(error, completeErrorMap) {
  if (error == null) {
    return null;
  } else if (Array.isArray(error.message)) {
    return error.message.map(function (e) {
      return completeErrorMap[e] || e;
    }).join(', ');
  } else {
    return completeErrorMap[error.message] || error.message;
  }
}

var FormInput = function FormInput(_ref, ref) {
  var check = _ref.check,
      _ref$errorMap = _ref.errorMap,
      errorMap = _ref$errorMap === void 0 ? {} : _ref$errorMap,
      help = _ref.help,
      helpProps = _ref.helpProps,
      hideLabel = _ref.hideLabel,
      label = _ref.label,
      formMeta = _ref.formMeta,
      formErrors = _ref.formErrors,
      name = _ref.name,
      className = _ref.className,
      custom = _objectWithoutProperties(_ref, ["check", "errorMap", "help", "helpProps", "hideLabel", "label", "formMeta", "formErrors", "name", "className"]);

  var touched = formMeta.touched[name] || formMeta.isSubmitted;
  var error = formErrors[name];

  var inputEl = /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, _extends({
    id: name,
    name: name,
    valid: touched ? !error : undefined
  }, custom, {
    innerRef: ref
  }));

  var completeErrorMap = _objectSpread(_objectSpread({}, defaultErrorMap), errorMap);

  var errors = formattedErrors(error, completeErrorMap);
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
    check: check,
    className: className
  }, check ? inputEl : null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    check: check,
    htmlFor: name,
    hidden: hideLabel
  }, label), ' ', help ? /*#__PURE__*/_react["default"].createElement(_reactstrap.FormText, helpProps, help) : '', check ? null : inputEl, ' ', errors && touched ? /*#__PURE__*/_react["default"].createElement(_reactstrap.FormFeedback, {
    className: styles.formFeedback
  }, errors) : /*#__PURE__*/_react["default"].createElement(_reactstrap.FormFeedback, null), ' ');
};

var _default = /*#__PURE__*/_react["default"].forwardRef(FormInput);

exports["default"] = _default;