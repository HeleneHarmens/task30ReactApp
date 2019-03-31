import React, { Component } from 'react';
//import './users.css';
import Navigationbar from "../components/navbar"

class Users extends Component {
    state = {

    }

    render() {
        return (
            <React.Fragment>
                <Navigationbar></Navigationbar>
                <div className="Users">
                    <h2>Users</h2>

                </div >
            </React.Fragment>

        );
    }
}

export default Users;

