import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter, Link } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';

import ProductList from './ProductList';
import gqlDeleteProductFromClient from '../queries/deleteProductFromClient';

import applloClient, { clientsData } from '../helps/mockApolloClient';


describe('ProductList Component', () => {

  it('should render without throwing an error', () => {
    shallow(<ProductList />);
  });

  it('should render product data correctly', function () {
    const testClient = clientsData[0];
    const wrapper = mount(
      <ApolloProvider client={applloClient}>
        <BrowserRouter>
          <ProductList products={testClient.products} clientId={testClient.id} />
        </BrowserRouter>
      </ApolloProvider>
    );

    expect(wrapper.find("ProductList").props().products.length).toBe(testClient.products.length);
    expect(wrapper.find(".collection-item").length).toBe(testClient.products.length);
    expect(wrapper.find("i.material-icons").length).toBe(testClient.products.length);
  });

  it("Click delete button should work", () => {
    let testClient = clientsData[0];
    const retClient =
      {
        id: '1', clientName: 'A', clientPassword: 'AAAAA', email: 'A@qq.com',
        products: [
          { "id": "2", "name": "P2" }
        ]
      };

    const wrapper = mount(
      <ApolloProvider client={applloClient}>
        <BrowserRouter>
          <ProductList products={testClient.products} clientId={testClient.id} />
        </BrowserRouter>
      </ApolloProvider>
    );

    const buttons = wrapper.find(".material-icons");
    if (buttons && buttons.length > 0) {
      let button = buttons.first();
      button.simulate("click");
      expect(wrapper.find(".collection-item").length).toBe(1);
    }
  });

})
