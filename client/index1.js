import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const PrimaryLayout = () => (
  <BrowserRouter>
    <div className="primary-layout">
      <header>
        Our React Router 4 App
      <Route path="/user" component={UsersMenu} />
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/User">User</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/user" component={UsersPage} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
)

const HomePage = ({ match }) => (<div>{`${match}`}</div>)
const UsersPage = () => <div>Users Page</div>
const AboutPage = () => <div>About Page</div>

const UsersMenu = () => <div>Users Menu</div>

const App = () => (
  <PrimaryLayout />
)

ReactDOM.render(<App />, document.getElementById('root'))