import React from 'react';
import { Bar } from 'react-chartjs-2';
import {getMovieBySearch, getTVShowsBySearch } from './DataFetch.js';
import { yellow } from '@material-ui/core/colors';

//to be combined with searchListData entries in movie search section
function compareMovieRatings(mOneRate, mTwoRate, mOnePop, mTwoPop){
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
//to be combined with searchListData entries in tv show search section
function compareTVRatings(tvOneRate, tvTwoRate, tvOnePop, tvTwoPop){
    var dataContents = {
        labels: ["Rating", "Populairty"],
        datasets: [
        {
            label: ' TV Show One',
            backgroundColor: "blue",
            borderColor: "blue",
            borderWidth: 2,
            data: [tvOneRate, tvTwoPop]
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

