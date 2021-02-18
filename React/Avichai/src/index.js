import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import Places from './places.js'
import Img from './img.js'
import Login from './view/components/Login/login'
import './view/components/Login/login.css';

ReactDOM.render(
    <React.StrictMode>
        <Login/>
        {/* <Places/> */}
        <Img/>
    </React.StrictMode>
    ,document.getElementById('root')
);
