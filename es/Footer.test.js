import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
test('renders without crashing', function () {
  render( /*#__PURE__*/React.createElement(Footer, null));
});