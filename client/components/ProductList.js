import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = { clientId: this.props.clientId };
    }

    onDeleteClient(id, clientId) {
    this.props.mutate({
        variables: {
            id,
            clientId
        }
    });
  }

  renderProducts() {
    return this.props.products.map(({ id, name }) => {
      return (
        <li key={id} className="collection-item">
          {name}
          <div className="line-operation">
            <i className="material-icons" onClick={() => this.onDeleteClient(id, this.state.clientId)}>
              delete
            </i>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderProducts()}
      </ul>
    );
  }
}

const mutation = gql`
  mutation DeleteProductFromClient($id: ID!, $clientId: ID!) {
    deleteProductFromClient(id: $id, clientId: $clientId) {
      id
      products {
        name
      }
    }
  }
`;

export default graphql(mutation)(ProductList);
