function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import { Context as CurrentUserContext } from './account/CurrentUserContext';

function AuthenticatedRoute(_ref) {
  var Redirect = _ref.Redirect,
      Route = _ref.Route,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["Redirect", "Route", "children"]);

  var _useContext = useContext(CurrentUserContext),
      currentUser = _useContext.currentUser;

  return /*#__PURE__*/React.createElement(Route, rest, function (_ref2) {
    var match = _ref2.match,
        location = _ref2.location,
        more = _objectWithoutProperties(_ref2, ["match", "location"]);

    if (currentUser == null) {
      return match == null ? null : /*#__PURE__*/React.createElement(Redirect, {
        to: {
          pathname: "/",
          state: {
            from: location
          }
        }
      });
    } else {
      return typeof children === 'function' ? children(_objectSpread({
        match: match,
        location: location
      }, more)) : children;
    }
  });
}

export default AuthenticatedRoute;