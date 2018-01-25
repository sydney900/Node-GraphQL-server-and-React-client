import './style/style.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';

import ClientList from './components/ClientList';
import ClientCreate from './components/ClientCreate';
import ClientDetail from './components/ClientDetail';


const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    link: new HttpLink(),
    cache: new InMemoryCache()
});

class Root extends Component {
    render() {
        return (
            <BrowserRouter>           
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <nav className="mdl-navigation mdl-layout__header-row">
                        <span className="mdl-navigation__link">
                            <Link to="/" >Home</Link>
                        </span>
                        <span className="mdl-navigation__link">
                            <Link to="/client/new">Create new client</Link>
                        </span> 
                    </nav>
                    <ApolloProvider client={client}>
                        <Switch>
                            <Route exact path="/" component={ClientList} />
                            <Route path='/client/new' component={ClientCreate} />
                            <Route path="/client/:id" component={ClientDetail} />
                        </Switch>
                    </ApolloProvider>
                </div>
            </BrowserRouter>

        );
    }
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);