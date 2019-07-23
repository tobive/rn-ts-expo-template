import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from '../App';

it('should render without crash', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
