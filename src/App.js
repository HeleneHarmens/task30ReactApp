import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Genres from "./pages/genres";
import MyMap from "./pages/map";
import Navigationbar from "./components/navbar"


class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigationbar></Navigationbar>

        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/genres" component={Genres} />
          <Route path="/map" component={MyMap} />
        </Router>
      
      </div>

    );
  }
}

export default App;
