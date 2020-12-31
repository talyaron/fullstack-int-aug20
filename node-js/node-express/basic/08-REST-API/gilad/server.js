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
    console.log(test)

    fetch(`http://maps.openweathermap.org/maps/2.0/weather/TA2/1/1/{y}&appid=c399d7a4de28f7c870248632ab334d4d`)
    


        .then(res => res.json())
        .then(weather => {
            console.log(weather)
            res.send({ ok: true, weather }) //asynchornic programing
        });


    

    res.send({ ok: true })

})





app.listen(3000, () => { console.log('listen 3000') })