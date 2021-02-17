import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import Places from './places.js'
import Img from './img.js'


ReactDOM.render(
    <React.StrictMode>
        <Places/>
        <Img/>
    </React.StrictMode>
    ,document.getElementById('root')
);
