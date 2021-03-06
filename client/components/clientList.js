import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import gqlQueryClients from '../queries/fetchClients';
import gqlDeleteClient from '../queries/deleteClient';

class ClientList extends Component {
    onClientDelete(id) {
        this.props.mutate({
            variables: {
                id: id
            }
        });
    }

    renderClients() {
        if (this.props.data.clients) {
            return this.props.data.clients.map(({ id, clientName }) => {
                return (
                    <li key={id} className="collection-item">
                        <Link  to={`/client/${id}`}>{clientName}</Link> 
                        <i className="material-icons"
                            onClick={() => this.onClientDelete(id)}>
                            delete
                        </i>
                    </li>
                )
            });
        }
    }

    render() {
        if (this.props.data.loading) {
            return (<div>loading...</div>);
        }

        return (
            <div>
                <ul className="collection">
                    {this.renderClients()}
                </ul>
                <Link to="/client/new" className="btn-floating btn-medium right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}


export default graphql(gqlDeleteClient)(
    graphql(gqlQueryClients)(ClientList)
);