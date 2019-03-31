import React, { Component } from 'react';
import './home.css';




class Home extends Component {
    state = {
    }

    render() {
        return (
            <React.Fragment>
                
                <div id="home" className="Home bg-info">

                    <h2>Welcome!</h2>
                    <h6>Go to "Genres" to browse some genre categories.</h6>
                    <h6>Go to "Map" to see on the map where Anime is originally from.</h6>


                </div >
            </React.Fragment>
        );
    }
}

export default Home;

