import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, } from 'react-router-dom';
import fetchClient from '../queries/fetchClient';
import ProductCreate from './ProductCreate';
import ProductList from './ProductList';

class ClientDetail extends Component {
  render() {
    const { client } = this.props.data;

    if (!client) { return <div>Loading...</div>; }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{client.clientName}</h3>
        <ProductList products={client.products} />
        <ProductCreate clientId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchClient, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(ClientDetail);
