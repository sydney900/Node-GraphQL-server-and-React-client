import GraphQLMock from 'graphql-mock';

const schema = `
  type Client {
    id: ID!
    clientName: String!
    clientPassword: String!
    email: String!
  }

  type Query {
    clients: [Client]
  }

  type Mutation {
    addClient(clientName: String, clientPassword: String, email:String): Client
  }
`;

export const clientsDta = [
    { id: '1', clientName: 'A', clientPassword: 'AAAAA', email: 'A@qq.com' },
    { id: '2', clientName: 'B', clientPassword: 'BBBBB', email: 'B@qq.com' }
]

export const graphqlMock = new GraphQLMock(schema);