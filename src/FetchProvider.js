import React, { useContext, useEffect } from 'react';
import { useFetch, Provider } from 'use-http';

import { Context as ConfigContext } from './ConfigContext';
import { Context as CurrentUserContext } from './account/CurrentUserContext';

function FetchProvider({ children, cachePolicy }) {
  const { apiRootUrl } = useContext(ConfigContext);
  console.log('apiRootUrl:', apiRootUrl);  // eslint-disable-line no-console
  const { currentUser } = useContext(CurrentUserContext);
  const options = {
    // We can't make use of the cache until it is possible to clear it when
    // the user signs out.
    //
    // cachePolicy: cachePolicy || 'cache-first',
    // cacheLife: 1 * 60 * 1000,  /* 1 minute in milliseconds. */
    cachePolicy: 'no-cache',
    cacheLife: 0,
    interceptors: {
      // Options can be modified and must be returned.
      request: async ({ options }) => {
        if (currentUser) {
          if (options.headers == null) { options.headers = {}; }
          options.headers.Authorization = currentUser.authToken;
        }
        return options;
      },
    },
  };

  return (
    <Provider
      options={options}
      url={apiRootUrl}
    >
      <CacheClearer />
      {children}
    </Provider>
  );
}


export function useClearCache() {
  const { cache: memoryCache } = useFetch({ persist: false });
  const { cache: storageCache } = useFetch({ persist: true, cachePolicy: 'cache-first' });

  return function() {
    memoryCache.clear();
    storageCache.clear();
  };
}

// This is a separate component than FetchProvider so that it is rendered
// inside of `use-http`'s `Provider`.
function CacheClearer() {
  const clearCache = useClearCache();

  useEffect(() => {
    window.addEventListener('signout', () => {
      clearCache();
    });
  }, []);

  return null;
}

export default FetchProvider;
