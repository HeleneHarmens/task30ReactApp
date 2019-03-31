import React, { Component } from 'react';
import './map.css';
import Navigationbar from "../components/navbar"
import MyLeafletMap from "../components/myLeafletMap"


class MyMap extends Component  {

    state = {

    }

    render() {

        const infoText = ['The word anime is the Japanese term for animation.', 
                <br />, 'Japanese animation began in the early 20th century.'];
        
        return (
            <React.Fragment>
                <Navigationbar></Navigationbar>
                <div className="myMap bg-info">
                    <h2>Map over Anime's birthplace Japan </h2>
                    <p>{infoText}</p>
                    <div id="leafletMap">
                        <MyLeafletMap></MyLeafletMap>
                    </div>
                </div >
            </React.Fragment>

    );
  }
}


export default MyMap;

