import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import ClientList from './ClientList';
import ClientCreate from './ClientCreate';
import ClientDetail from './ClientDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
         <h1>Clients</h1>
          <Switch>
            <Route exact path="/" component={ClientList} />
            <Route path='/client/new' component={ClientCreate} />
            <Route path="/client/:id" component={ClientDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;