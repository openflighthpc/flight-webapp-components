import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from './CurrentUserContext';
test('Provider renders without crashing', function () {
  render( /*#__PURE__*/React.createElement(Provider, null, /*#__PURE__*/React.createElement("div", null, "Some children")));
});