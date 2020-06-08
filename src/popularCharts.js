import React from 'react';
import { Bar } from 'react-chartjs-2';
import {getPopularTVShows, getPopularMovies } from './DataFetch.js';


class TvChart extends React.Component {
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
        this.fetchingPopTvShows();
        let shows = this.fetchingPopTvShows();
    }
    fetchingPopTvShows = () => {
        getPopularTVShows()
            .then((data) => {
              var  name = []
              var  vote = []
                for(var i=0; i<data.results.length; i++){
                    name.push(data.results[i].name);
                    vote.push(data.results[i].vote_average)
                }
                this.setState({
                    labels: name,
                    datasets: [{
                    label: 'Average Rating',
                backgroundColor: 'rgba(66, 66, 250, 0.7)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: vote
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
                    text: 'Popular TV Shows',
                    fontSize:20
                },
                legend:{
                    display: true,
                    position: "right"
                }
            }}
            />
            </div>
    
        );
    }
}
class MovieChart extends React.Component {
    constructor(props) {
        super(props)
        this.names=[]
        this.votes =[]
        this.state = {
            labels: [],
            datasets: [
              {
                label: 'Average Rating',
                backgroundColor: 'rgb(66, 66, 250)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: []
              }
            ]
          }
    }
    componentDidMount() {
        this.fetchingPopularMovies();
        let movies = this.fetchingPopularMovies();
    }
   
    fetchingPopularMovies = () => {
        getPopularMovies()
            .then((data) => {
              var  name = []
              var  vote = []
                for(var i=0; i<data.results.length; i++){
                    name.push(data.results[i].title);
                    vote.push(data.results[i].vote_average)
                }
                this.setState({
                    labels: name,
                    datasets: [{
                    label: 'Average Rating',
                backgroundColor: 'rgb(66, 66, 250)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: vote
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
                    text: 'Popular Movies',
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

export { MovieChart, TvChart};