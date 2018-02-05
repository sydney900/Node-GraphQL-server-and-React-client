import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter, Link } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';

import ClientList from './ClientList';
import gqlQueryClients from '../queries/fetchClients';

import { graphqlMock, clientsData } from '../helps/graphqlMock';

graphqlMock.expect(gqlQueryClients).reply({
  clients: clientsData
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
    expect(wrapper.find("ClientList").props().data.clients.length).toBe(clientsData.length);
    expect(wrapper.find(".collection-item").length).toBe(clientsData.length);
    expect(wrapper.find("i.material-icons").length).toBe(clientsData.length + 1);
    // expect(toJSON(wrapper)).toMatchSnapshot();
  });
})
