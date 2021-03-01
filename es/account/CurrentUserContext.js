function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useMemo, useState } from 'react';
import useFetch from 'use-http';
var initialState = null;
var Context = /*#__PURE__*/React.createContext(initialState);
var loginApiUrl = new URL(process.env.REACT_APP_LOGIN_API_BASE_URL, window.location.origin).toString();
export function useLoginApi() {
  return useFetch(loginApiUrl, {
    headers: {
      Accept: 'application/json'
    },
    credentials: 'include'
  });
}

function Provider(_ref) {
  var children = _ref.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var _useLoginApi = useLoginApi(),
      del = _useLoginApi.del,
      get = _useLoginApi.get,
      response = _useLoginApi.response;

  var actions = useMemo(function () {
    return {
      setUser: function setUser(user) {
        setCurrentUser({
          authToken: "Bearer ".concat(user.authentication_token),
          name: user.name,
          username: user.username
        });
      },
      signOut: function signOut() {
        window.dispatchEvent(new CustomEvent('signout'));
        del('/sign-out');
        setCurrentUser(null);
      }
    };
  }, [del, setCurrentUser]);
  useEffect(function () {
    function getSession() {
      return _getSession.apply(this, arguments);
    }

    function _getSession() {
      _getSession = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var responseBody;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return get('/session');

              case 2:
                responseBody = _context.sent;

                if (response.ok) {
                  actions.setUser(responseBody.user);
                } else {
                  setCurrentUser(null);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getSession.apply(this, arguments);
    }

    getSession(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      currentUser: currentUser,
      actions: actions
    }
  }, children);
}

export { Context, Provider };