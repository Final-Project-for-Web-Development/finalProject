import React from 'react';
import { getMovieBySearch, getTVShowsBySearch } from './DataFetch.js';

//to be combined with searchComparteTwo data in movie search section
class MovieData extends React.Component {
    constructor(){
        super(props);
        this.state ={
            name: "",
            popularity: "",
            country: [],
            firstAired: "",
            language: "",
            rating: "",
            overview: "",
            adult: false
        };
    }
    componentDidMount() {
        this.fetchingMovie();
        let movie = this.fetchingMovie();
    }
    fetchingMovie = (movie) => {
        getMovieBySearch(movie)
            .then((movieData) => {
                this.setState({
                    name : movieData.results[0].name,
                    popularity: movieData.results[0].popularity,
                    country: movieData.results[0].origin_country,
                    firstAired: movieData.results[0].first_air_date,
                    language: movieData.results[0].original_language,
                    rating: movieData.results[0].vote_average,
                    overview: movieData.results[0].overview,
                    adult: movieData.results[0].adult
                });
                return movieData;
            })
            .catch(err => {

                return err;
            });
    }
    render(){

        return(
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.overview}</p>
                <p>Additional Information:
                    <ul>
                        <li>First Aired: {this.state.first_air_date}</li>
                        <li>Origins: {this.state.country}</li>
                        <li>Language: {this.state.language}</li>
                        <li>For Adults Only? : {this.state.adult}</li>
                        <li>Popularity: {this.state.popularity}%</li>
                        <li>Rating: {this.state.rating}/10</li>
                    </ul>
                </p>
            </div>
        );}
}
//to be combined with searchCompareTwo entries in tv show search section
class TVShowData extends React.Component {
    constructor(){
        super(props);
        this.state={
            name: "",
            popularity: "",
            country: [],
            firstAired: "",
            language: "",
            rating: "",
            overview: ""
        };
    }
    componentDidMount() {
        this.fetchingTvShow();
        let shows = this.fetchingTvShow();
    }
    fetchingTvShow = (show) => {
        getTVShowsBySearch(show)
            .then((showData) => {
                this.setState({
                    name : showData.results[0].name,
                    popularity: showData.results[0].popularity,
                    country: showData.results[0].origin_country,
                    firstAired: showData.results[0].first_air_date,
                    language: showData.results[0].original_language,
                    rating: showData.results[0].vote_average,
                    overview: showData.results[0].overview
                });
                return showData;
            })
            .catch(err => {

                return err;
            });
    }
    render(){

    return(
        <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.overview}</p>
            <p>Additional Information:
                <ul>
                    <li>First Aired: {this.state.first_air_date}</li>
                    <li>Origins: {this.state.country}</li>
                    <li>Language: {this.state.language}</li>
                    <li>Popularity: {this.state.popularity}%</li>
                    <li>Rating: {this.state.rating}/10</li>
                </ul>
            </p>
        </div>
    );}
}
export { MovieData, TVShowData};