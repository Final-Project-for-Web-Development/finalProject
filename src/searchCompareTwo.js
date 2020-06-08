import React from 'react';
import { Bar } from 'react-chartjs-2';
import {getMovieBySearch, getTVShowsBySearch } from './DataFetch.js';
import SearchIconAnimation from './searchAnimation.js';

class compareSearchMovieRatings extends React.Component {
    constructor(props) {
    super(props)
        this.names=[]
        this.votes =[]
        this.state = {
            labels: [],
            datasets: [
              {
                label: 'Average Rating',
                backgroundColor: 'rgba(66, 66, 250, 0.7)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: []
              }
            ]
          }
    }
    componentDidMount() {
        this.fetchingPopularMovies();
        let shows = this.fetchingPopularMovies();
        this.fetchingMovie();
        let movieTwo = this.fetchingMovie();
    }
    fetchingMovie = (movie) => {
        getMovieBySearch(movie)
            .then((movieData) => {
                this.votes.push(movieData.results[0].vote_average)
                this.names.push(movieData.results[0].title)
                this.setState({
                    labels: this.names,
                    datasets: [{
                    label: 'Average Rating',
                backgroundColor: 'rgb(66, 66, 250)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.votes
                    }]
                })
                return movieData
             })
            .catch(err => {

                return err;
            });
    }
    fetchingPopularMovies = () => {
        getPopularMovies()
            .then((data) => {
             
                for(var i=0; i<data.results.length; i++){
                    this.names.push(data.results[i].title);
                    this.votes.push(data.results[i].vote_average)
                }
                this.setState({
                    labels: this.names,
                    datasets: [{
                    label: 'Average Rating',
                backgroundColor: 'rgb(66, 66, 250)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.votes
                    }]
                })
                return data;
            })
            .catch(err => {

                return err;
            });
    }
    render(){

        return(
         <div>
            
            <Bar 
            data={this.state}
            options={{
                title:{
                    display: true,
                    text: 'Popular Movies Compared to Searched',
                    fontSize:20
                },
                legend:{
                    display: true,
                    position: "right"                }
            }}
            />
            </div>
    
        );
    }
}

class compareSearchTVRatings extends React.Component {
    constructor(props) {
    super(props)
        this.names=[]
        this.votes =[]
        this.state = {
            labels: [],
            datasets: [
              {
                label: 'Average Rating',
                backgroundColor: 'rgba(66, 66, 250, 0.7)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: []
              }
            ]
          }
    }
    componentDidMount() {
        this.fetchingPopularShows();
        let showsPop = this.fetchingPopularShows();
        this.fetchingShow();
        let show = this.fetchingShow();
    }
    fetchingShow = (show) => {
        getMovieBySearch(show)
            .then((showData) => {
                this.votes.push(showData.results[0].vote_average)
                this.names.push(showData.results[0].title)
                this.setState({
                    labels: this.names,
                    datasets: [{
                    label: 'Average Rating',
                backgroundColor: 'rgb(66, 66, 250)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.votes
                    }]
                })
                return showData
             })
            .catch(err => {

                return err;
            });
    }
    fetchingPopularShows = () => {
        getPopularShows()
            .then((data) => {
             
                for(var i=0; i<data.results.length; i++){
                    this.names.push(data.results[i].name);
                    this.votes.push(data.results[i].vote_average)
                }
                this.setState({
                    labels: this.names,
                    datasets: [{
                    label: 'Average Rating',
                backgroundColor: 'rgba(66, 66, 250, 0.7)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.votes
                    }]
                })
                return data;
            })
            .catch(err => {

                return err;
            });
    }
    render(){

        return(
         <div>
            
            <Bar 
            data={this.state}
            options={{
                title:{
                    display: true,
                    text: 'Popular TV Shows Compared to Searched',
                    fontSize:20
                },
                legend:{
                    display: true,
                    position: "right"                }
            }}
            />
            </div>
    
        );
    }
}
