function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { useContext } from 'react';
import { Context as CurrentUserContext, useLoginApi } from './CurrentUserContext';
export function useSignIn(_ref) {
  var onError = _ref.onError,
      onSuccess = _ref.onSuccess;

  var _useContext = useContext(CurrentUserContext),
      userActions = _useContext.actions;

  var _useLoginApi = useLoginApi(),
      post = _useLoginApi.post,
      error = _useLoginApi.error,
      loading = _useLoginApi.loading,
      response = _useLoginApi.response;

  function signIn(_x) {
    return _signIn.apply(this, arguments);
  }

  function _signIn() {
    _signIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var responseBody;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return post('/sign-in', {
                account: data
              });

            case 2:
              responseBody = _context.sent;

              if (response.ok) {
                userActions.setUser(responseBody.user);
                typeof onSuccess === 'function' && onSuccess();
              } else {
                typeof onError === 'function' && onError(responseBody, response);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _signIn.apply(this, arguments);
  }

  return {
    signIn: signIn,
    error: error,
    loading: loading
  };
}
export function useSignOut() {
  var _useContext2 = useContext(CurrentUserContext),
      userActions = _useContext2.actions;

  return userActions.signOut;
}