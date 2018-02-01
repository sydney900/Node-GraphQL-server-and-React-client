import React from 'react';
import { shallow } from 'enzyme';

import App from './components/App';
import Root from './root';

test('The client root.js should render app conponent', () => {
  const root = shallow(<Root />);
  expect(root.exists(<App></App>)).toBe(true);

});