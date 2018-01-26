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
            <div className="mdl-card">
                <div className="mdl-card__actions">
                    <Link to="/">Back</Link>
                </div>
                <div className="mdl-card__title dl-card--border">
                   <h3>{client.clientName}</h3>
                </div>
                <div className="mdl-card__media dl-card--border">
                    <h6 color="grey">Product List:</h6>
                    <ProductList products={client.products} clientId={client.id} />
                </div>
                <div className="mdl-card__supporting-text dl-card--border">
                    <h6 color="grey">New Product:</h6>
                    <ProductCreate clientId={client.id} />                
                </div>                
            </div>
        );
    }
}

export default graphql(fetchClient, {
    options: (props) => { return { variables: { id: props.match.params.id } } }
})(ClientDetail);
