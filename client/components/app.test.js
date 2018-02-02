import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './app';

describe('App Component', () => {  
  it('should render without throwing an error', function() {
    shallow(<App />);
  });

  it('should contains Header', function() {
    expect(shallow(<App />).find("Header").exists()).toBe(true);
  });

  it("Should contains Footer", ()=>{
    expect(shallow(<App />).find("Footer").exists()).toBe(true);  
  });

  it("Should contains div element with main css class", ()=>{
    expect(shallow(<App />).find('div.main').exists()).toBe(true); 
  });
  
})
