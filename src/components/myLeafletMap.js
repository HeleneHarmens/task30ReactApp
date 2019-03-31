import React, { Component } from 'react';
import './myLeafletMap.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


class MyLeafletMap extends Component  {
    constructor() {
        super();
        this.state = {
          lat: 51.505,
          lng: -0.09,
          zoom: 13,
          chosenCity: "Oslo"
        };
      }
    state = {

    }

    render() {

        return (
            <LeafletMap
            center={[35.6, 139.8]}
            zoom={1}
            maxZoom={30}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            >
            <TileLayer
            url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[35.6, 139.8]}>
            <Popup>
                Popup for any custom information.
            </Popup>
            </Marker>
        </LeafletMap>
    );
  }
}


export default MyLeafletMap;

