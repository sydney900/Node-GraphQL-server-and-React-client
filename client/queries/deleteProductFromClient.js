import gql from 'graphql-tag';

export default gql`
mutation DeleteProductFromClient($id: ID!, $clientId: ID!) {
  deleteProductFromClient(id: $id, clientId: $clientId) {
    id
    products {
      name
    }
  }
}
`;
