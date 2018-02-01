import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './app';

describe('App Component', () => {  
  it('should render without throwing an error', function() {
    shallow(<App />);
  });

  it('should contains a css class nav-wrappe', function() {
    expect(shallow(<App />).exists(<div className="nav-wrapper"></div>)).toBe(true);
  });

  it("Should render nav", ()=>{
    expect(shallow(<App />).exists(<nav></nav>)).toBe(true);  
  });

  it("Should render logo", ()=>{
    expect(shallow(<App />).exists('a.brand-logo')).toBe(true); 
  });
  
})
