import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'unfetch';


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
        <div>
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo right">Demo</a>
                <ul id="nav-mobile" className="left">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/client/new">Create new client</Link></li>
                </ul>
                </div>
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
}

export default App;