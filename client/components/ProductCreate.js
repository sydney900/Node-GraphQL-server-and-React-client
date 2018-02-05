import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import gqlAddProductToClient from '../queries/addProductToClient';

class ProductCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { name: (!this.props.pname) ? '' : this.props.pname, clientId: this.props.clientId };
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                name: this.state.name,
                clientId: this.state.clientId
            }
        }).then(() => this.setState({ name: '' }));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Product</label>
                <input id="name" minLength="5"
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })}
                />
                <input type="submit" value="Save" />
            </form>
        );
    }
}

export default graphql(gqlAddProductToClient)(ProductCreate);
