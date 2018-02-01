import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import Root from './root';


test('The client index.js should not crash', () => {
  const div = document.createElement('div');
  div.setAttribute("id","root");
  ReactDOM.render(<Root />, div);
  ReactDOM.unmountComponentAtNode(div);
});