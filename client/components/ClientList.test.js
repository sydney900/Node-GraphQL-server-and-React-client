import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { shallow, mount, render } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import { addTypenameToDocument } from 'apollo-client';

import ClientList from './ClientList';
import query from '../queries/fetchClients';

const gqlQuery = addTypenameToDocument(query);

const clientsResult = {
  loading: false,
  clients: [
    {clientName: 'A',clientPassword: 'AAAAA',email: 'A@qq.com', __typename: 'Client' },
    {clientName: 'B',clientPassword: 'BBBBB',email: 'B@qq.com', __typename: 'Client' }
  ]
};

describe('ClientList Component', () => {
  it('should render without throwing an error', () => {
    shallow(<ClientList />);
  });

  it('should render client data correctly', function () {
    const wrapper = mount(
      <BrowserRouter>
      <MockedProvider mocks={[{
        request: {
          query: gqlQuery,
          variables: { },
        },
        result: {
          data: clientsResult,
        },
      }]}
      >
       <ClientList />
      </MockedProvider>
      </BrowserRouter>
  );

  console.log(wrapper.find('ClientList').props());
  console.log(wrapper.find('ClientList').props.data);
    expect(wrapper.find('ClientList').prop('data').clients.length).toBe(2);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})
