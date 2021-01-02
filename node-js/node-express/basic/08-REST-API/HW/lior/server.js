const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');
const fetch = require('node-fetch');
const request = require('request');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())



//app.post('/sendTitle', (req, res) => {

    // const { city } = req.body;
    // console.log(city)

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`) //event loop
        .then(res => res.json())
        .then(weather => {
            res.send({ ok: true, weather }) //asynchornic programing
        });

//})
app.listen(3000, () => { console.log('listen 3000') })