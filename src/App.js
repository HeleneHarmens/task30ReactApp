import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
//import Header from "./components/header/header";
import Home from "./pages/home";
import Genres from "./pages/genres";
import Users from "./pages/users";
import AnimePage from "./components/animeBoxes"
import Navigationbar from "./components/navbar"
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        

        <Navigationbar></Navigationbar>

        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/genres" component={Genres} />
            <Route path="/users" component={Users} />
          
        </Router>
      </div>
    );
  }
}

export default App;
