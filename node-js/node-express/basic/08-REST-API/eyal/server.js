/******************************************
 *  Author : eyal shemuel   
 *  Created On : Mon Dec 28 2020
 *  File : server.js.js
 *******************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'))


app.get('/sendCity', (req, res) => {
    console.log('tt')


    fetch("https://dark-sky.p.rapidapi.com/33,33?lang=en&units=auto", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
            "x-rapidapi-host": "dark-sky.p.rapidapi.com"
        }
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            res.send(response);
        })
        .catch(err => {
            console.error(err);
        });




})



app.listen(port, () => { console.log(`Listen on port ${port}`) });
