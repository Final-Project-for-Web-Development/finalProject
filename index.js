import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './setup.js'
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainComponent />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
