import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';
import { ApolloProvider } from 'react-apollo';
//import{graphqlMock, clientsData} from '../helps/graphqlMock';
import applloClient, { clientsData } from '../helps/mockApolloClient';


import ClientCreate from './ClientCreate';
import gqlAddClients from '../queries/addClient';

const wrapper = mount(
  <BrowserRouter>
    <ApolloProvider client={applloClient}>
      <ClientCreate />
    </ApolloProvider>
  </BrowserRouter>
);

describe('ClientCreate Component', () => {
  //beforeEach(() => graphqlMock.reset());

  it('should render without throwing an error', () => {
    shallow(<ClientCreate />);
  });

  it('State should have correct default value after created', () => {
    const wrapper = shallow(<ClientCreate />);
    const initialState = wrapper.state();

    console.log(wrapper.instance().state);
    console.log(initialState);

    // expect(initialState.clientName).toBe('');
    // expect(initialState.clientPassword).toBe('');
    // expect(initialState.email).toBe('');
  });

  it('should contains one form', function () {
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.exists(<from />)).toBe(true);
  });

  it('should contains correctnumber of input in the form', () => {
    expect(wrapper.find("input").length).toBe(4);
  });

  it('should render a client name input', () => {
    expect(wrapper.find('[name="clientName"]').length).toEqual(1)
  })

  it('should render a email input', () => {
    expect(wrapper.find('[name="email"]').length).toEqual(1)
  })

  it('should render a password input', () => {
    expect(wrapper.find('[name="clientPassword"]').length).toEqual(1)
  })

  it("Click submit button should work", () => {
    // graphqlMock.expect(gqlAddClients).reply({
    //   "addClient": {
    //     "id": "5a751ee2d258ff3b30e02781",
    //     "clientName": "DD",
    //     "clientPassword": "DD",
    //     "email": "dd@qq.com"
    //   }
    //   });


    let input = wrapper.find('input[name="clientName"]');
    input.simulate('change', { target: { name: "clientName", value: 'DD' } });
    input = wrapper.find('input[name="clientPassword"]');
    input.simulate('change', { target: { name: "clientPassword", value: 'DDDDD' } });
    input = wrapper.find('input[name="email"]');
    input.simulate('change', { target: { name: "email", value: 'D@qq.com' } });

    // console.log(wrapper.find("ClientCreate").instance().onSubmit);
    const mockMutate = wrapper.find("ClientCreate").instance().onSubmit = jest.fn();
    // console.log(wrapper.find("ClientCreate").instance().onSubmit);
    const buttons = wrapper.find("input[value='Save']");
    if (buttons.length > 0) {
      let button = buttons.first();
      button.simulate("click");    
      expect(mockMutate).toHaveBeenCalledTimes(1);
    }


    // const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    // wrapper.find("form").simulate("submit", fakeEvent);
    //wrapper.find("form").simulate("submit");


    expect(clientsData.length).toBe(2);
  });

  it("Click submit button should call onSubmit function", () => {

    //const wrapper = shallow(<ClientCreate test='qq'/>);

    let input = wrapper.find('input[name="clientName"]').first();
    input.simulate('change', { target: { name: "clientName", value: 'DD' } });
    input = wrapper.find('input[name="clientPassword"]').first();
    input.simulate('change', { target: { name: "clientPassword", value: 'DDDDD' } });
    input = wrapper.find('input[name="email"]').first();
    input.simulate('change', { target: { name: "email", value: 'D@qq.com' } });

    const mockMutate = wrapper.find("ClientCreate").instance().onSubmit = jest.fn();
    wrapper.find("form").first().simulate("submit");
    console.log(wrapper.find("form").first());
    expect(mockMutate).toHaveBeenCalledTimes(1);

    // const buttons = wrapper.find("input[value='Save']");
    // if (buttons.length > 0) {
    //   let button = buttons.first();
    //   button.simulate("click");    
    //   expect(mockMutate).toHaveBeenCalledTimes(1);
    // }
  });
  
})
