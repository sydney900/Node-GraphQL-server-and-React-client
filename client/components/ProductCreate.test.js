import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';
import { ApolloProvider } from 'react-apollo';
import{graphqlMock, clientsData} from '../helps/graphqlMock';

import ProductCreate from './ProductCreate';
import gqlAddProductToClient from '../queries/addProductToClient';

const wrapper = mount(
  <ApolloProvider  client={graphqlMock.client}>
     <BrowserRouter>
       <ProductCreate clientId="1" pname='me'/>
     </BrowserRouter>
  </ApolloProvider>
);

describe('ProductCreate Component', () => {
  beforeEach(() => graphqlMock.reset());

  it('should render without throwing an error', () => {
    shallow(<ProductCreate />);
  });

  it('should contains one form', function () {
    expect(wrapper.find("form").length).toBe(1);
  });

  it('should contains correctnumber of input in the form',  () => {
    expect(wrapper.find("input").length).toBe(2);
  });

  it('should render a name input', () => {
    expect(wrapper.find('#name').length).toEqual(1)
   })

   it('should render a submit', () => {
    expect(wrapper.find('[type="submit"]').length).toEqual(1)
   })

   it('should set correct initial state', () => {
    expect(wrapper.find("ProductCreate").props().clientId).toEqual("1");
    expect(wrapper.find('#name').props().value).toEqual("me")
   })

  it("Click submit button should work", () => {

    graphqlMock.expect(gqlAddProductToClient).reply({
      "addProductToClient": {
        "id": "1",
        "clientName": "A",
        "clientPassword": "AAAAA",
        "email": "A@qq.com",
        "products": [
          {"id": "1", "name": "P1"},
          {"id": "2", "name": "P2"}
        ]
      }
      });

    const input = wrapper.find('#name');
    input.simulate('change', { target: { value: 'you' } });
    const button = wrapper.find("input[value='Save']");
    button.simulate("click");
    expect(clientsData.length).toBe(2);
  });

})
