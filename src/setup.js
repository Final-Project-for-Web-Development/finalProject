import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TabsDisplay from './TabsDisplay.js';
import HomePage from './HomePage.js';
import SearchIconAnimation from './searchAnimation.js';
import { TvChart, MovieChart } from './popularCharts.js';




import {
    Switch,
    Route,
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: "black",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: "lightgrey"

    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,

    },
    rightToolbar: {
        marginLeft: "auto",
        marginRight: -12
    },
}));


export default function MainComponent() {
    const classes = useStyles();

    return (
        < div className={classes.root} >
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Switch>
                        <Route path='/Movies'>
                            <TabsDisplay />
                        </Route>
                        <Route path='/TVShows'>
                            <TabsDisplay />
                        </Route>
                        <Route path="/DataCharts">
                            <TabsDisplay />
                        </Route>
                        <Route exact path="/">
                            <TabsDisplay />
                        </Route>
                    </Switch>
                    <section className={classes.rightToolbar}>
                        <SearchIconAnimation />
                    </section>

                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph component={'div'} variant={'body2'}>
                    <Switch>
                        <Route path='/Movies'>
                            <MoviePage />
                        </Route>
                        <Route path='/TVShows'>
                            <TVShows />
                        </Route>

                        <Route path="/DataCharts">
                            <MovieChart />
                            <TvChart />
                        </Route>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </Typography>
            </main>
        </div >
    );
}


// prop pageName ["home", "dataCharts"]
function NavigationHost(props) {
    if (props.pageName === "home") {
        return (
            <div>
                <HomePage />
            </div>
        )

    }
    else if (props.pageName === "DataCharts") {
        return (
            <div>
                <MovieChart />
                <TvChart />
            </div>
        )
    }
    else if (props.pageName === "Movies") {
        return <MoviePage />
    }
    else if (props.pageName === "TVShows") {
        return <TVShows />
    }
}

function MoviePage() {
    return (
        <div>Welcome! Here is where the movie search will be!</div>
    );

}

function TVShows() {
    return (
        <div>Welcome! Here is where the tv shows search will be!</div>
    );

}


// function DataChartPage() {
//     return (
//         <div>Welcome! Here is where the data visualizations will be!</div>
//     );

// }




