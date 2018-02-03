import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';
import { ApolloProvider } from 'react-apollo';
//import { MockedProvider } from 'react-apollo/test-utils';
import{graphqlMock, clientsDta} from '../helps/graphqlMock';

import ClientCreate from './ClientCreate';

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
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it('should contains correctnumber of input in the form',  () => {
    expect(wrapper.find("input").length).toBe(4);
  });

  it("Click submit button should work", () => {
    graphqlMock.expect(wrapper.mutaion).reply({
      "addClient": {
        "id": "5a751ee2d258ff3b30e02781",
        "clientName": "DD",
        "clientPassword": "DD",
        "email": "dd@qq.com"
      }
      });

    const button = wrapper.find("input[value='Save']");
    button.simulate("click");
    expect(clientsDta.length).toBe(2);
  });

})
