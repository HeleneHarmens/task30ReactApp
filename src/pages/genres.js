import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './genres.css';
import Navigationbar from "../components/navbar"



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

        const { genreName, genreInfo, chosenGenre } = this.state;

        return (
            <React.Fragment>
                <Navigationbar></Navigationbar>
                <div className="Genres d-flex flex-row " id="genres">


                    <div className="d-flex flex-row">
                        <div id="genreList_id" className="p-2 shadow-none mb-6 bg-info rounded">
                            <h3>Genres</h3>
                            <ul id="" key={genreName.id} className="list-group">
                                {genreName.map(genreName => (
                                    <li key={genreName.id} className="list-group-item py-1 d-flex justify-content-left align-items-center">
                                        <a href="#" value="value"
                                            onClick={() => this.setState({ chosenGenre: String(genreName.attributes.name) })}>
                                            {genreName.attributes.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p></p>
                        </div>

                        <div id="genreInfo_id" className="p-2 shadow-none mb-6 bg-info rounded">
                            <h3>{chosenGenre}</h3>
                            <div>
                                {genreInfo.map(genreInfo => (

                                    <li key={genreInfo.id} className="list-group-item d-flex justify-content-left ">
                                        <div id="imgDiv_id">
                                            <img src={genreInfo.attributes.posterImage.tiny} alt="Anime posterimage"></img>
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
