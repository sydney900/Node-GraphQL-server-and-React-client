import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Footer from './Footer';

describe('Footer Component', () => {  
  it('should render html footer', function() {
    const footer = shallow(<Footer />);
    expect(footer.find('footer').length).toEqual(1);
  });

  it('should contains this year', function() {
    const footer = shallow(<Footer />);
    expect(footer.find('a').text()).toMatch(new Date().getFullYear().toString());
  });

  it('should contains a footer element', function() {
    expect(shallow(<Footer />).find("footer.footer").exists()).toBe(true);
  });
  
})
