const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');
const fetch = require('node-fetch');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())


app.post('/sendPokemon', (req, res) => {
    const { pokemon } = req.body;
    console.log(pokemon)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //event loop
    .then(res => res.json())
    .then(data => {
        console.log(data)
        res.send(data) //asynchornic programing
    });
   /* const { city } = req.body;
    console.log(city)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c72c68beca5025e3cc723b7e0045386&units=metric`) //event loop
        .then(res => res.json())
        .then(weather => {
            res.send({ ok: true, weather }) //asynchornic programing
        });


    console.log('cont')*/

})



app.listen(3000, () => { console.log('listen 3000') })