import React from 'react';
import useFetch from 'use-http';
import { AppLoadingSpinner } from './Spinner';
import { DefaultErrorMessage } from './ErrorBoundary';
var initialState = null;
var Context = /*#__PURE__*/React.createContext(initialState);

function Provider(_ref) {
  var children = _ref.children;

  var _useFetch = useFetch(process.env.REACT_APP_CONFIG_FILE, []),
      error = _useFetch.error,
      loading = _useFetch.loading,
      data = _useFetch.data;

  console.log('process.env.REACT_APP_CONFIG_FILE,:', process.env.REACT_APP_CONFIG_FILE); // eslint-disable-line no-console

  console.log('error:', error); // eslint-disable-line no-console

  console.log('loading:', loading); // eslint-disable-line no-console

  console.log('data:', data); // eslint-disable-line no-console

  if (loading) {
    return /*#__PURE__*/React.createElement(AppLoadingSpinner, null);
  } else if (error && error.message === "Not Found") {
    return /*#__PURE__*/React.createElement(Context.Provider, {
      value: {
        unconfigured: true
      }
    }, children);
  } else if (error) {
    return /*#__PURE__*/React.createElement(DefaultErrorMessage, null);
  } else {
    console.log('final data:', data); // eslint-disable-line no-console

    return /*#__PURE__*/React.createElement(Context.Provider, {
      value: data
    }, children);
  }
}

export { Context, Provider };