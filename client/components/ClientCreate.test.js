import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import ClientCreate from './ClientCreate';

const clientList = {
  clients: [
    {clientName: 'A',clientPassword: 'AAAAA',email: 'A@qq.com', __typename: 'Client' },
    {clientName: 'B',clientPassword: 'BBBBB',email: 'B@qq.com', __typename: 'Client' }
  ]
};

describe('ClientCreate Component', () => {
  it('should render without throwing an error', () => {
    shallow(<ClientCreate />);
  });

  it('should contains one form', function () {
    const wrapper = shallow(<ClientCreate />);
    console.log(wrapper);
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it('should contains three input in the form',  () => {
    expect(shallow(<ClientCreate />).find("input").length).toBe(3);
  });

  // it("Should contains a input of email type", () => {
  //   expect(shallow(<ClientCreate />).find({ type: "email" }).exists()).toBe(true);
  // });

})
