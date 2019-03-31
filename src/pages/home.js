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
                    <a href="https://kitsu.docs.apiary.io/#introduction/json-api">
                        <img width="150px" src="https://media.cdnandroid.com/89/81/c4/0f/imagen-kitsu-anime-0thumb.jpg"></img></a>
                    <a href="https://leafletjs.com/">
                        <img width="350px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/909px-Leaflet_logo.svg.png"></img></a>

                </div >
            </React.Fragment>
        );
    }
}

export default Home;

