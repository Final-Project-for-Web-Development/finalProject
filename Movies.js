import React from 'react';
import SearchIconAnimation from './searchAnimation.js'
import { getPopularMovies, getPoster, getPopularTVShows, getMovieBySearch } from './DataFetch.js'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import './homepage.css'

class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            movieResults: [],
            movieImages: [],
            TVShowsResults: [],
            TVShowsImages: [],
            loading: true
        }
    }

    componentDidMount() {
        // if(title != '')
        //     this.fetchingMovies();
        // this.fetchingMovies();
        // this.fetchingMoviesORTVShows(getPopularMovies());
        // this.fetchingMoviesORTVShows(getPopularTVShows());
    }

    componentDidUpdate() {
        this.fetchingMovies()
    }

    getMovieSearch(searchTitle) {
        console.log('hello')
        this.setState( {
            title:searchTitle
        })
    }
    


    fetchingMoviesPosterImages() {
        this.state.movieResults.map(item => {
            getPoster(item.poster_path)
                .then((data) => {
                    let url = data.url
                    let newArr = this.state.movieImages
                    newArr.push(url)
                    this.setState(
                        {
                            movieResults: this.state.movieResults,
                            movieImages: newArr,
                            loading: false
                        }
                    )
                    return url
                })
        });
    }

    // trying to merge both movies and TV Shows search but not working right now
    /* fetchingMoviesORTVShows(func, movieBool) {
        console.log(func)
        if (movieBool) {
            func
                .then((data) => {
                    console.dir(data.results)
                    this.setState({
                        movieResults: data.results,
                        movieImages: [],
                        loading: true
                    }, () => this.fetchingPosterImages());
                    return data;
                })
                .catch(err => {

                    return err;
                });
        } 


    } */


    fetchingMovies = () => {
        // console.log(getPopularMovies())
        getMovieBySearch(this.state.title)
            .then((data) => {
                console.dir(data.results)
                this.setState({
                    movieResults: data.results,
                    movieImages: [],
                    loading: true
                }, () => this.fetchingMoviesPosterImages());
                return data;
            })
            .catch(err => {

                return err;
            });
    }

    render() {
        return (
            <div class="container">
                <Typography variant="h2" color="textSecondary">
                    Movies By Search
                </Typography>
                <Grid container wrap="wrap">
                    <div className="side">
                        <div class="scrollmenu">
                            {(this.state.loading ? Array.from(new Array(40)) :
                                (this.state.movieResults).map((item, index) => (
                                    <Box key={index} width={250} marginRight={0.5} my={5}>

                                        {item ? (
                                            <img style={{ width: 250, height: 300 }} alt={item.title} src={this.state.movieImages[index]} />
                                        ) : (
                                                <Skeleton variant="rect" width={250} height={300} />
                                            )}

                                        {item ? (
                                            <>
                                                <Box pr={2}>
                                                    <Typography gutterBottom variant="body2">
                                                        {item.title}
                                                    </Typography>

                                                    <Typography variant="caption" color="textSecondary">
                                                        {`${item.popularity} • ${item.release_date}`}
                                                    </Typography>

                                                </Box>
                                                <>
                                                    <Typography variant="caption" color="textSecondary">
                                                        {` ${item.overview}`}
                                                    </Typography>
                                                </>
                                            </>
                                        ) : (
                                                <Box pt={0.5}>
                                                    <Skeleton />
                                                    <Skeleton width="60%" />
                                                </Box>
                                            )}
                                    </Box>
                                )))}
                        </div>
                    </div>
                </Grid>
            </div>

	 );

    }
}

export default Movies;