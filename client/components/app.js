import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'unfetch';

import Header from './Header';
import Footer from './Footer';
import ClientList from './ClientList';
import ClientCreate from './ClientCreate';
import ClientDetail from './ClientDetail';
import config from './client-config';

var graphqlurl = '/graphql';
if (config && !config.graphqlurl) {
    graphqlurl = config.graphqlurl;
}

const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    link: new HttpLink({ uri: graphqlurl, fetch: fetch }),
    cache: new InMemoryCache()
});

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Header logoName='GraphQL Demo'></Header>
                    <div className="main">
                        <ApolloProvider client={client}>
                            <Switch>
                                <Route exact path="/" component={ClientList} />
                                <Route path='/client/new' component={ClientCreate} />
                                <Route path="/client/:id" component={ClientDetail} />
                            </Switch>
                        </ApolloProvider>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;