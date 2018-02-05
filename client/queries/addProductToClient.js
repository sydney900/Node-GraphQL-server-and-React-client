import gql from 'graphql-tag';

export default gql`
mutation AddProductToClient($name: String!, $clientId: ID) {
  addProductToClient(name: $name, clientId: $clientId) {
    id
    products {
      id
      name
    }
  }
}
`;
