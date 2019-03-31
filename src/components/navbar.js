import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Home from "../pages/home";
import Genres from "../pages/genres";
import Users from "../pages/users";

class Navigationbar extends React.Component {


    render() {

        return (

            <>
                <header className="App-header">
                    <h1>Anime Webpage</h1>
                </header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink activeStyle={{ color: 'white' }} to="/">Home</NavLink>
                        <NavLink activeStyle={{ color: 'white' }} to="/genres">Genres</NavLink>
                        <NavLink activeStyle={{ color: 'white' }} to="/users">Users</NavLink>
                    </Nav>
                    {/* 
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    */}
                </Navbar>

            </>
        )
    }

}

export default Navigationbar;