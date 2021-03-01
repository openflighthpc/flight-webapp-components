function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React, { useContext } from 'react';
import { Provider } from 'use-http';
import { Context as ConfigContext } from './ConfigContext';
import { Context as CurrentUserContext } from './account/CurrentUserContext';

function FetchProvider(_ref) {
  var children = _ref.children,
      cachePolicy = _ref.cachePolicy;

  var _useContext = useContext(ConfigContext),
      apiRootUrl = _useContext.apiRootUrl;

  var _useContext2 = useContext(CurrentUserContext),
      currentUser = _useContext2.currentUser;

  var options = {
    // We can't make use of the cache until it is possible to clear it when
    // the user signs out.
    //
    // cachePolicy: cachePolicy || 'cache-first',
    // cacheLife: 1 * 60 * 1000,  /* 1 minute in milliseconds. */
    cachePolicy: 'no-cache',
    cacheLife: 0,
    interceptors: {
      // Options can be modified and must be returned.
      request: function () {
        var _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
          var options;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = _ref2.options;

                  if (currentUser) {
                    if (options.headers == null) {
                      options.headers = {};
                    }

                    options.headers.Authorization = currentUser.authToken;
                  }

                  return _context.abrupt("return", options);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function request(_x) {
          return _request.apply(this, arguments);
        }

        return request;
      }()
    }
  };
  return /*#__PURE__*/React.createElement(Provider, {
    options: options,
    url: apiRootUrl
  }, children);
}

export default FetchProvider;