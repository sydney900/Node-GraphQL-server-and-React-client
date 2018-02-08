import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { SchemaLink } from "apollo-link-schema";


const typeDefs = `
  type Client {
    id: ID!
    clientName: String!
    clientPassword: String!
    email: String!
    products: Product
  }

  type Product {
    id: ID!
    name: String!
  }

  type Query {
    clients: [Client]
    client: Client
    products: [Product]
  }

  type Mutation {
    addClient(clientName: String, clientPassword: String, email:String): Client
    addProductToClient(name: String, clientId: ID): Client
    deleteProductFromClient(id: ID, clientId: ID): Client
  }
`;

export const clientsData = [
  {
    id: '1', clientName: 'A', clientPassword: 'AAAAA', email: 'A@qq.com',
    products: [
      { "id": "1", "name": "P1" },
      { "id": "2", "name": "P2" }
    ]
  },
  {
    id: '2', clientName: 'B', clientPassword: 'BBBBB', email: 'B@qq.com',
    products: [
      { "id": "3", "name": "P3" },
    ]
  }
]

const resolvers = {
  Query: {
    clients: () => clientsData,
    client: (id) => clientsData.find(c => c.id === id),
  },
  Mutation: {
    addClient: (clientName, clientPassword, email) => {
      const client = { clientName, clientPassword, email };
      clientsData.push(client);

      console.log("addClient", client);

      return client;
    },
    deleteProductFromClient: (id, clientId) => {
      console.log("deleteProductFromClient");
      const client = clientsData.find(c => c.id === clientId);
      client.products.splice(client.products.findIndex(p => p.id === id), 1);
      console.log(client);
      return client;
    }
  },
  // Client: {
  //   products: (c) => clientsData.find(c => c.id === id).products,
  // },
  // Product: {
  //   client: (product) => find(authors, { id: post.authorId }),
  // },
};


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,//mocks
});

addMockFunctionsToSchema({ schema });

const apolloCache = new InMemoryCache(window.__APOLLO_STATE__);

const applloClient = new ApolloClient({
  cache: apolloCache,
  link: new SchemaLink({ schema })
});

export default applloClient;