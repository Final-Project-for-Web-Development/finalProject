import React from 'react';
import SearchIconAnimation from './searchAnimation.js'
import { getPopularMovies } from './DataFetch.js'


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieResults: []
        }
    }

    componentDidMount() {
        this.fetchingMovies();
        let blah = this.fetchingMovies();
        console.log(blah)
    }



    fetchingMovies = () => {
        console.log(getPopularMovies())
        getPopularMovies()
            .then((data) => {
                console.dir(data.results)
                this.setState({
                    movieResults: data.results,
                    loading: false
                })
                return data;
            })
            .catch(err => {

                return err;
            });
    }

    render() {

        return (
            <>
                <div><SearchIconAnimation /></div>
                <br />
            </>
        );
    }
}

export default HomePage;