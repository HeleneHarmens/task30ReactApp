import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Navigationbar from "./components/navbar"
import App from './App';
import Home from './pages/home'
import Genres from './pages/genres'
import Users from './pages/users'

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const routing = (
    
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/genres" component={Genres} />
      </div>
    </Router>

  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
