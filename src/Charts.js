import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getNowPlayingMovies } from './DataFetch.js';

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.names=[]
        this.votes =[]
        this.state = {
            labels: [],
            datasets: [
              {
                label: 'Average Rating',
                backgroundColor: 'rgb(241, 79, 79)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: []
              }
            ]
          }
    }
    componentDidMount() {
        this.fetchingNowPlaying();
        let movies = this.fetchingNowPlaying();
    }
   
    fetchingNowPlaying = () => {
        getNowPlayingMovies()
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
                backgroundColor: 'rgb(241, 79, 79)',
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
                    text: 'Movies Now Playing in Theaters',
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
export default Chart;