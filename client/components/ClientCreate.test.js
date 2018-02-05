import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';
import { ApolloProvider } from 'react-apollo';
import{graphqlMock, clientsData} from '../helps/graphqlMock';

import ClientCreate from './ClientCreate';
import gqlAddClients from '../queries/addClient';

const wrapper = mount(
  <ApolloProvider  client={graphqlMock.client}>
     <BrowserRouter>
       <ClientCreate />
     </BrowserRouter>
  </ApolloProvider>
);

describe('ClientCreate Component', () => {
  beforeEach(() => graphqlMock.reset());

  it('should render without throwing an error', () => {
    shallow(<ClientCreate />);
  });

  it('should contains one form', function () {
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.exists(<from />)).toBe(true);
  });

  it('should contains correctnumber of input in the form',  () => {
    expect(wrapper.find("input").length).toBe(4);
  });

  it('should render a client name input', () => {
    expect(wrapper.find('[name="clientName"]').length).toEqual(1)
   })

   it('should render a email input', () => {
    expect(wrapper.find('[name="email"]').length).toEqual(1)
   })

  it('should render a password input', () => {
    expect(wrapper.find('[name="password"]').length).toEqual(1)
   })

  it("Click submit button should work", () => {       
    graphqlMock.expect(gqlAddClients).reply({
      "addClient": {
        "id": "5a751ee2d258ff3b30e02781",
        "clientName": "DD",
        "clientPassword": "DD",
        "email": "dd@qq.com"
      }
      });

    const button = wrapper.find("input[value='Save']");
    button.simulate("click");
    expect(clientsData.length).toBe(2);
  });

})
