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

    const initialState = wrapper.find("ClientCreate").instance().state;

    expect(initialState.clientName).toBe('');
    expect(initialState.clientPassword).toBe('');
    expect(initialState.email).toBe('');
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

  function simulateInputForm (wrapper) {
    let input = wrapper.find('input[name="clientName"]');
    input.simulate('change', { target: { name: "clientName", value: 'DD' } });
    input = wrapper.find('input[name="clientPassword"]');
    input.simulate('change', { target: { name: "clientPassword", value: 'DDDDD' } });
    input = wrapper.find('input[name="email"]');
    input.simulate('change', { target: { name: "email", value: 'D@qq.com' } });
  }

  it("The state should change accordingly", () => {
    
    simulateInputForm (wrapper);

    expect(wrapper.find("ClientCreate").instance().state).toEqual(expect.objectContaining({
      clientName: 'DD', clientPassword: 'DDDDD', email: 'D@qq.com'
    }));

  });

  it.only('Submit the form should call onSubmit function', () => {

    simulateInputForm (wrapper);
    
    //console.log(wrapper.find("ClientCreate").instance());
    const spy = jest.spyOn(wrapper.find("ClientCreate").instance(), 'onSubmit');
    wrapper.find("ClientCreate").instance().forceUpdate()
    
    wrapper.find("form").first().simulate("submit");

    expect(spy).toBeCalled();  
  })

})
