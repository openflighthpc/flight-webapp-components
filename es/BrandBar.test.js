import BrandBar from './BrandBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Context as CurrentUserContext } from './CurrentUserContext';
import { Context as ConfigContext } from './ConfigContext';
test('renders without crashing', function () {
  render( /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(ConfigContext.Provider, {
    value: {
      clusterName: 'A cluster'
    }
  }, /*#__PURE__*/React.createElement(CurrentUserContext.Provider, {
    value: {
      currentUser: null,
      actions: {}
    }
  }, /*#__PURE__*/React.createElement(BrandBar, null)))));
});