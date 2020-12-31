const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');
const fetch = require('node-fetch');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())



app.post('/fetchApi', (req, res) => {
    const { test } = req.body;
    const {headers} = req;
    console.log(headers)
    

    fetch(`http://maps.openweathermap.org/maps/2.0/weather/TA2/1/1/&appid=9c72c68beca5025e3cc723b7e0045386`)
    .then(res => res.json())
        .then(weather => {
            console.log(weather)
            res.send({ ok: true, weather }) //asynchornic programing
        });


    

   

})





app.listen(3000, () => { console.log('listen 3000') })