import React, { Component } from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './genres.css';
import AnimePage from '../components/animeBoxes'
import Navigationbar from "../components/navbar"


const API = 'https://kitsu.io/api/edge/';
const urlGenresAdventure = 'anime?filter[genres]=adventure';
const urlAllGenres = 'genres';

class Genres extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            genreName: [],
            genreInfo: [],
            chosenGenre: "Adventure",
            prevChosenGenre: null
        };

    }


    getCategory(chosenGenre) {

        console.log("Now showing: " + chosenGenre)

        fetch("https://kitsu.io/api/edge/genres")
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    genreName: findresponse.data
                });
            });


        fetch("https://kitsu.io/api/edge/anime?filter[genres]=" + chosenGenre)
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    genreInfo: findresponse.data
                });
            });

    }



    componentDidMount() {
        this.getCategory(this.state.chosenGenre)
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.chosenGenre !== this.state.chosenGenre) {
            console.log("update genre from " + prevState.chosenGenre + " to " + this.state.chosenGenre);
            this.getCategory(this.state.chosenGenre)
        }
    }



    render() {

        const { data, genreName, canonicalTitles, genreInfo, chosenGenre } = this.state;

        return (
            <React.Fragment>
                <Navigationbar></Navigationbar>
                <div className="d-flex flex-row" id="genres" className="Genres">


                    <div className="d-flex flex-row">
                        <div id="genreList_id" className="p-2">
                            <h3>GENRES</h3>
                            <ul id="" key={genreName.id} className="list-group">
                                {genreName.map(genreName => (
                                    <li key={genreName.id} className="list-group-item py-1 d-flex justify-content-left align-items-center">
                                        <a href="#" value="String(genreName.attributes.name)"
                                            onClick={() => this.setState({ chosenGenre: String(genreName.attributes.name) })}>
                                            {genreName.attributes.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p></p>
                        </div>

                        <div id="genreInfo_id" className="p-2">
                            <h3>{chosenGenre}</h3>
                            <div>
                                {genreInfo.map(genreInfo => (

                                    <li key={genreInfo.id} className="list-group-item d-flex justify-content-left ">
                                        <div id="imgDiv_id">
                                            <img src={genreInfo.attributes.posterImage.tiny}></img>

                                        </div>
                                        <div id="textDiv_id">
                                            <h4>{genreInfo.attributes.canonicalTitle}</h4>
                                            <h6>Suitable for: {genreInfo.attributes.ageRatingGuide}</h6>

                                            <p id="synopsisText">"{genreInfo.attributes.synopsis}"</p>
                                        </div>

                                    </li>

                                ))}

                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment >
        )
    }

}

export default Genres;
