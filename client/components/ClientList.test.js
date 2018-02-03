import React, { Component } from "react";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { ApolloProvider } from 'react-apollo';
//import { MockedProvider } from 'react-apollo/test-utils';

import { BrowserRouter, Link } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';

import ClientList from './ClientList';
import gqlQueryClients from '../queries/fetchClients';

import { graphqlMock, clientsDta } from '../helps/graphqlMock';

graphqlMock.expect(gqlQueryClients).reply({
  clients: clientsDta
});


const wrapper = mount(
  <ApolloProvider client={graphqlMock.client}>
    <BrowserRouter>
      <ClientList />
    </BrowserRouter>
  </ApolloProvider>
);

describe('ClientList Component', () => {

  beforeAll(() => {
  });

  beforeEach(() => {
    graphqlMock.reset()
  });

  it('should render without throwing an error', () => {
    shallow(<ClientList />);
  });

  it('should render client data correctly', function () {

    expect(wrapper.find("ClientList").props().data.clients.length).toBe(clientsDta.length);
    expect(wrapper.find(".collection-item").length).toBe(clientsDta.length);
    expect(wrapper.find("i.material-icons").length).toBe(clientsDta.length + 1);
    // expect(toJSON(wrapper)).toMatchSnapshot();
  });
})
