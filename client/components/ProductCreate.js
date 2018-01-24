import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class ProductCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { name: '' };
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                name: this.state.content,
                clientId: this.props.clientId
            }
        }).then(() => this.setState({ name: '' }));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Product</label>
                <input
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })}
                />
            </form>
        );
    }
}

const mutation = gql`
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

export default graphql(mutation)(ProductCreate);
