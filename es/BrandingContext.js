import React, { useContext } from 'react';
import useFetch from 'use-http';
import Spinner from './Spinner';
import { DefaultErrorMessage } from './ErrorBoundary';
import { isObject } from './utils';

function makeDataContext(url) {
  var initialState = null;
  var Context = /*#__PURE__*/React.createContext(initialState);
  return {
    Context: Context,
    Provider: Provider,
    useData: useData
  };

  function Provider(_ref) {
    var children = _ref.children;

    var _useFetch = useFetch(url, []),
        error = _useFetch.error,
        loading = _useFetch.loading,
        data = _useFetch.data;

    if (loading) {
      return /*#__PURE__*/React.createElement(Spinner, {
        text: "Loading..."
      });
    } else if (error && error.message === "Not Found") {
      return /*#__PURE__*/React.createElement(Context.Provider, {
        value: null
      }, children);
    } else if (error) {
      return /*#__PURE__*/React.createElement(DefaultErrorMessage, null);
    } else {
      return /*#__PURE__*/React.createElement(Context.Provider, {
        value: data
      }, children);
    }
  }

  function useData() {
    var data = useContext(Context);
    return lookup;

    function lookup(dottedKey) {
      var keys = dottedKey.split('.');
      return keys.reduce(function (accum, key) {
        if (isObject(accum)) {
          return accum[key];
        } else {
          return null;
        }
      }, data);
    }
  }
}

var _makeDataContext = makeDataContext(process.env.REACT_APP_BRANDING_FILE),
    BrandingContext = _makeDataContext.Context,
    BrandingProvider = _makeDataContext.Provider,
    useBranding = _makeDataContext.useData;

var _makeDataContext2 = makeDataContext(process.env.REACT_APP_ENVIRONMENT_FILE),
    EnvironmentContext = _makeDataContext2.Context,
    EnvironmentProvider = _makeDataContext2.Provider,
    useEnvironment = _makeDataContext2.useData;

export { BrandingContext, BrandingProvider, EnvironmentContext, EnvironmentProvider, useBranding, useEnvironment };