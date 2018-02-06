import GraphQLMock from 'graphql-mock';

const schema = `
  type Client {
    id: ID!
    clientName: String!
    clientPassword: String!
    email: String!
  }

  type Product {
    id: ID!
    name: String!
  }

  type Query {
    clients: [Client]
    products: [Product]
  }

  type Mutation {
    addClient(clientName: String, clientPassword: String, email:String): Client
    addProductToClient(name: String, clientId: ID): Client
    deleteProductFromClient(id: ID, clientId: ID): Client
  }
`;

export const clientsData = [
    { id: '1', clientName: 'A', clientPassword: 'AAAAA', email: 'A@qq.com',
      products: [
        {"id": "1", "name": "P1"},
        {"id": "2", "name": "P2"}
      ]
    },
    { id: '2', clientName: 'B', clientPassword: 'BBBBB', email: 'B@qq.com',
      products: [
        {"id": "3", "name": "P3"},
    ]
  }
]

export const graphqlMock = new GraphQLMock(schema);