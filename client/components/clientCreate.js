import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, HashRouter } from 'react-router-dom';

import gqlAddClients from '../queries/addClient';
import gqlQueryClients from '../queries/fetchClients';

class ClientCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            clientPassword: '',
            email: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();

        // console.log(this.props);
        this.props.mutate({
            variables: {
                clientName: this.state.clientName,
                clientPassword: this.state.clientPassword,
                email: this.state.email
            },
            refetchQueries: [{ query: gqlQueryClients, variables: null }]
        }).then(() => {
            console.log(this.props.data);
            this.props.history.push("/")
        });
    }

    inputChanged(event) {
        this.setState({
         [event.target.name]: event.target.value
        })
       }

    render() {
        return (
            <div>
                <Link to="/" className="">Back</Link>
                <h3>Create a New Client</h3>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <label>Client Name</label>
                    <input minLength="5" name="clientName"
                        onChange={this.inputChanged}
                        value={this.state.clientName}
                    />
                    <label>Client Password:</label>
                    <input type="password" name="password"
                        onChange={this.inputChanged}
                        value={this.state.clientPassword}
                    />
                    <label>Client Email:</label>
                    <input type="email" name = "email"
                        onChange={this.inputChanged}
                        value={this.state.email}
                    />
                   <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}

export default graphql(gqlAddClients)(ClientCreate);
