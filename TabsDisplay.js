import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {
    Link,

} from "react-router-dom";


class TabsDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    urlPath = () => {
        let blah = window.location.pathname;
        if (blah === '/dataCharts') {
            return 3;
        }
        else if (blah === '/Movies') {
            return 1;
        }
        else if (blah === '/TVShows') {
            return 2;
        }
        else {
            return 0;
        }
    }

    render() {

        let value = this.urlPath();
        console.log(value);
        return (
            <Tabs onChange={this.handleChange} value={value} >
                <Tab label="Home" to="/" component={Link} />
                <Tab label="Movies" to="/Movies" component={Link} />
                <Tab label="TV Shows" to="/TVShows" component={Link} />

                <Tab label="Data Charts" to="/dataCharts" component={Link} />
            </Tabs>
        )
    }
}

export default TabsDisplay;
