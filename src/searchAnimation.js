import React from 'react';
import './index.css'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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
                        <input type="text" placeholder="Search" onChange={(e) => console.log("Hi")} />
                    )
                    : <div></div>}
            </div>
        )
    }
}

export default SearchIconAnimation;
