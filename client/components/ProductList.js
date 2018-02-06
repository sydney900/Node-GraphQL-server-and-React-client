import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import gqlDeleteProductFromClient from '../queries/deleteProductFromClient';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { clientId: this.props.clientId };
  }

  onDeleteFromClient(id, clientId) {
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
            <i className="material-icons" onClick={() => this.onDeleteFromClient(id, this.state.clientId)}>
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

export default graphql(gqlDeleteProductFromClient)(ProductList);
