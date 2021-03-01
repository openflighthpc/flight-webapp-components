function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { createMemoryHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { render } from '@testing-library/react';
import AuthenticatedRoute from './AuthenticatedRoute';
import { Context as CurrentUserContext } from './CurrentUserContext';

function TestComponent(_ref) {
  var path = _ref.path,
      user = _ref.user;
  return /*#__PURE__*/React.createElement(CurrentUserContext.Provider, {
    value: {
      currentUser: user,
      actions: {}
    }
  }, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(AuthenticatedRoute, {
    path: "/auth"
  }, /*#__PURE__*/React.createElement("div", null, "Protected route")), /*#__PURE__*/React.createElement(Route, {
    path: "/"
  }, /*#__PURE__*/React.createElement("div", null, "Default route"))));
}

function renderTestComponent(path, user) {
  var history = createMemoryHistory();
  history.push(path);
  var renderResult = render( /*#__PURE__*/React.createElement(Router, {
    history: history
  }, /*#__PURE__*/React.createElement(TestComponent, {
    user: user
  })));
  return _objectSpread(_objectSpread({}, renderResult), {}, {
    history: history
  });
}

it('renders its children when there is a current user', function () {
  var user = {
    username: 'alces',
    authToken: 'fake:auth'
  };

  var _renderTestComponent = renderTestComponent('/auth', user),
      history = _renderTestComponent.history,
      queryByText = _renderTestComponent.queryByText;

  expect(queryByText('Protected route')).toBeInTheDocument();
  expect(queryByText('Default route')).not.toBeInTheDocument();
  expect(history.location.pathname).toEqual('/auth');
});
it('redirects to `/` when there is no current user', function () {
  var _renderTestComponent2 = renderTestComponent('/auth', null),
      history = _renderTestComponent2.history,
      queryByText = _renderTestComponent2.queryByText;

  expect(queryByText('Protected route')).not.toBeInTheDocument();
  expect(queryByText('Default route')).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/');
});
it('can render the default route even with a user', function () {
  var user = {
    username: 'alces',
    authToken: 'fake:auth'
  };

  var _renderTestComponent3 = renderTestComponent('/', user),
      history = _renderTestComponent3.history,
      queryByText = _renderTestComponent3.queryByText;

  expect(queryByText('Protected route')).not.toBeInTheDocument();
  expect(queryByText('Default route')).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/');
});