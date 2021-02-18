import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Places from './places.js'
import Img from './img.js'
import Login from './view/components/Login/login'
import App from './app'
import './view/components/Login/login.css';



ReactDOM.render(
    <React.StrictMode>
        <App/>
        <Img/>
        <Places/>
    </React.StrictMode>
    , document.getElementById('root')
);
