import React from 'react';
import useFetch from 'use-http';
import Spinner from './Spinner';
import { DefaultErrorMessage } from './ErrorBoundary';
var initialState = null;
var Context = /*#__PURE__*/React.createContext(initialState);

function Provider(_ref) {
  var children = _ref.children;

  var _useFetch = useFetch(process.env.REACT_APP_CONFIG_FILE, []),
      error = _useFetch.error,
      loading = _useFetch.loading,
      data = _useFetch.data;

  if (loading) {
    return /*#__PURE__*/React.createElement(Spinner, {
      text: "Loading..."
    });
  } else if (error && error.message === "Not Found") {
    return /*#__PURE__*/React.createElement(Context.Provider, {
      value: {
        unconfigured: true
      }
    }, children);
  } else if (error) {
    return /*#__PURE__*/React.createElement(DefaultErrorMessage, null);
  } else {
    return /*#__PURE__*/React.createElement(Context.Provider, {
      value: data
    }, children);
  }
}

export { Context, Provider };