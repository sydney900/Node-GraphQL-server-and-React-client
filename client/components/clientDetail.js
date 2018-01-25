import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, } from 'react-router-dom';
import fetchClient from '../queries/fetchClient';
import ProductCreate from './ProductCreate';
import ProductList from './ProductList';

class ClientDetail extends Component {
    render() {

        if (this.props.data.loading) {
            return (<div>loading...</div>);
        }

        const { client } = this.props.data;

        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{client.clientName}</h3>
                <ProductList products={client.products} clientId={client.id} />
                <ProductCreate clientId={client.id} />
            </div>
        );
    }
}

export default graphql(fetchClient, {
    options: (props) => { return { variables: { id: props.match.params.id } } }
})(ClientDetail);
