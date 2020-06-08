import React from 'react';
import { Bar } from 'react-chartjs-2';
import {getMovieBySearch, getTVShowsBySearch } from './DataFetch.js';
import SearchIconAnimation from './searchAnimation.js';

//to be combined with searchListData entries in movie search section

class compareMovieRatings extends React.Component {
    constructor(props){
        super(props);
        this.movieOne ={
            Populairty: null,
            Rating: null
        };
        this.movieTwo ={
            Popularity: null,
            Rating: null
        };
    }
    componentDidMount() {
        this.fetchingMovieOne();
        let movie = this.fetchingMovieOne();
        this.fetchingMovieTwo();
        let movieTwo = this.fetchingMovieTwo();
    }
    fetchingMovieOne = (movie) => {
        getMovieBySearch(movie)
            .then((movieData) => {
                this.movieOne ={                 
                    Popularity: movieData.results[0].popularity,
                    rating: movieData.results[0].vote_average,
                };
                if(this.movieTwo.Popularity != null && this.movieTwo.Rating != null){
                    return this.makeChart(this.movieOne.Rating, this.movieTwo.Rating, this.movieOne.Populairty, this.movieTwo.Popularity);
                }
             })
            .catch(err => {

                return err;
            });
    }
    fetchingMovieTwo = (movie) => {
        getMovieBySearch(movie)
            .then((movieData) => {
                this.movieTwo ={                 
                    Popularity: movieData.results[0].popularity,
                    rating: movieData.results[0].vote_average,
                };
                if(this.movieOne.Popularity != null && this.movieOne.Rating != null){
                    return this.makeChart(this.movieOne.Rating, this.movieTwo.Rating, this.movieOne.Populairty, this.movieTwo.Popularity);
                }
             })
            .catch(err => {

                return err;
            });
    }
    makeChart(mOneRate, mTwoRate, mOnePop, mTwoPop){
        var dataContents = {
            labels: ["Rating", "Populairty"],
            datasets: [
            {
                label: 'Movie One',
                backgroundColor: "blue",
                borderColor: "blue",
                borderWidth: 2,
                data: [mOneRate, mOnePop]
            },
            {
                label : "Movie Two",
                backgroundColor: "green",
                borderColor: "green",
                borderWidth: 2,
                data: [mTwoRate, mTwoPop]
            }
            ]}
        return (
            <Bar
            data = {dataContents}
            options={{
                title:{
                    display: true,
                    text: 'Comparing Movie Popularity and Rating',
                    fontSize: 20
                },
                legend:{
                    display: true,
                    position: "right"                }
            }}
            />
        )
    }
    render(){
        return(
            this.makeChart(this.movieOne.Rating, this.movieTwo.Rating,this.movieOne.Populairty, this.movieTwo.Popularity)
        );  
    }
}
//to be combined with searchListData entries in tv show search section
class compareTVShowRatings extends React.Component {
    constructor(props){
        super(props);
        this.showOne ={
            Populairty: null,
            Rating: null
        };
        this.showTwo ={
            Popularity: null,
            Rating: null
        };
    }
    componentDidMount() {
        this.fetchingTVShowOne();
        let movie = this.fetchingTVShowOne();
        this.fetchingTVShowTwo();
        let movieTwo = this.fetchingTVShowTwo();
    }
    fetchingTVShoweOne = (show) => {
        getTVShowsBySearch(show)
            .then((showData) => {
                this.showOne ={                 
                    Popularity: showData.results[0].popularity,
                    rating: showData.results[0].vote_average,
                };
                if(this.showTwo.Popularity != null && this.showTwo.Rating != null){
                    return this.makeChart(this.showOne.Rating, this.showTwo.Rating, this.showOne.Populairty, this.showTwo.Popularity);
                }
             })
            .catch(err => {

                return err;
            });
    }
    fetchingTVShowTwo = (show) => {
        getTVShowsBySearch(show)
            .then((showData) => {
                this.showTwo ={                 
                    Popularity: showData.results[0].popularity,
                    rating: showData.results[0].vote_average,
                };
                if(this.showOne.Popularity != null && this.showOne.Rating != null){
                    return this.makeChart(this.showOne.Rating, this.showTwo.Rating, this.showOne.Populairty, this.showTwo.Popularity);
                }
             })
            .catch(err => {

                return err;
            });
    }
    makeChart(tvOneRate, tvTwoRate, tvOnePop, tvTwoPop){
        var dataContents = {
            labels: ["Rating", "Populairty"],
            datasets: [
            {
                label: ' TV Show One',
                backgroundColor: "blue",
                borderColor: "blue",
                borderWidth: 2,
                data: [tvOneRate, tvOnePop]
            },
            {
                label : "TV Show Two",
                backgroundColor: "green",
                borderColor: "green",
                borderWidth: 2,
                data: [tvTwoRate, tvTwoPop]
            }
            ]}
        return (
            <Bar
            data = {dataContents}
            options={{
                title:{
                    display: true,
                    text: 'Comparing TV Show Popularity and Rating',
                    fontSize: 20
                },
                legend:{
                    display: true,
                    position: "right"                }
            }}
            />
        )
    }
    render(){
        return(
            this.makeChart(this.showOne.Rating, this.showTwo.Rating,this.showOne.Populairty, this.showTwo.Popularity)
        );  
    }
}
