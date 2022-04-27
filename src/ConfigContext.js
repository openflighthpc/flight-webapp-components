import React from 'react';
import useFetch from 'use-http';

import { AppLoadingSpinner } from './Spinner';
import { DefaultErrorMessage } from './ErrorBoundary';

const initialState = null;
const Context = React.createContext(initialState);

function Provider({ children }) {
  const { error, loading, data, } = useFetch(
    process.env.REACT_APP_CONFIG_FILE,
    []
  );
  console.log('process.env.REACT_APP_CONFIG_FILE,:', process.env.REACT_APP_CONFIG_FILE,);  // eslint-disable-line no-console
  console.log('error:', error);  // eslint-disable-line no-console
  console.log('loading:', loading);  // eslint-disable-line no-console
  console.log('data:', data);  // eslint-disable-line no-console

  if (loading) {
    return <AppLoadingSpinner />;
  } else if (error && error.message === "Not Found") {
    return (
      <Context.Provider value={{ unconfigured: true }}>
        {children}
      </Context.Provider>
    );
  } else if (error) {
    return <DefaultErrorMessage />;
  } else {
    console.log('final data:', data);  // eslint-disable-line no-console
    return (
      <Context.Provider value={data}>
        {children}
      </Context.Provider>
    );
  }
}

export {
  Context,
  Provider,
}
