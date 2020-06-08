import React from 'react';
import './index.css'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { getMovieBySearch, getTVShowsBySearch } from './DataFetch.js';
import getMovieSearch from './Movies.js';
import {getTVShowSearch} from './TVShows.js';

var title='';

class SearchIconAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSearch: false
        }
    }
    openSearch = () => {
        this.setState({ openSearch: false });
    }
    functionCall = () => {
        let currentState = this.state.openSearch;
        this.setState({ openSearch: !currentState });
    }
    render() {
        return (
            <div>
                <IconButton onClick={this.functionCall}>
                    <SearchIcon style={{ color: 'white', width: '30px', height: '30px' }} />
                </IconButton>
                {this.state.openSearch ?
                    (
                        <input type="text" placeholder="Search" onKeyDown={(e) =>{
                            if (e.key == 'Enter')
                                if (window.location.pathname == '/TVShows') {
                                    getTVShowSearch(title)
                                    // getTVShowsBySearch(title)
                                    //     .then((data) => {
                                    //         console.dir(data.results)
                                    //         getTVShowSearch(data.results)
                                    //     })
                                    //     .catch(err => {
                                    //         return err;
                                    //     });
                                }
                                else {
                                    getMovieSearch(title);
                                    // getMovieBySearch(title)
                                    //     .then((data) => {
                                    //         console.dir(data.results)
                                    //         getMovieSearch(data.results)
                                    //     })
                                    //     .catch(err => {
                                    //         return err;
                                    //     });
                                }
                            else if (e.key == 'Backspace')
                                title = title.substring(0, title.length - 1);
                            else if (e.key != 'Shift' && e.key != 'CapsLock' && e.key != 'Alt' && e.key != 'Control' && e.key != 'Meta' && e.key != 'Tab')
                                title += e.key
                            }} />
                    )
                    : <div></div>}
            </div>
        )
    }
}

export default SearchIconAnimation;
