import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Header from './Header';

describe('Header Component', () => {
  it('should has a prop logoName', function () {
    const logo = "GraphQL Demo";
    const wrapper = shallow(<Header logoName={logo} />);
    expect(wrapper.instance().props.logoName).toEqual(logo);
    //expect(wrapper.prop('logoName')).toEqual(logo); // Warning: .prop(key) only returns values for props that exist in the root node.

    expect(wrapper.find('a.brand-logo').text()).toEqual(logo);
  });

  it('should display empty if no logo name', function () {
    const header = shallow(<Header />);
    expect(header.find('a.brand-logo').text()).toMatch("");
  });

  it('should contains a css class nav-wrappe', function () {
    expect(shallow(<Header />).find("div.nav-wrapper").exists()).toBe(true);
  });

  it('should have two menu', function () {
    const header = shallow(<Header />);
    expect(header.find('a.brand-logo').text()).toMatch("");
  });

})
