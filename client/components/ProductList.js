import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ProductList extends Component {
  onAddClient(id, clientId) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        addClient: {
          id,
          __typename: 'ProductType',
          clientId: clientId
        }
      }
    });
  }

  renderProducts() {
    return this.props.products.map(({ id, name }) => {
      return (
        <li key={id} className="collection-item">
          {name}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => this.onAddClient(id, clientId)}
            >
              add
            </i>
            {clientId}
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
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(ProductList);
