import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'unfetch';

import Header from './header';
import Footer from './footer';
import ClientList from './ClientList';
import ClientCreate from './ClientCreate';
import ClientDetail from './ClientDetail';

const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    link: new HttpLink({ uri: '/graphql', fetch: fetch }),
    cache: new InMemoryCache()
});

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Header></Header>
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