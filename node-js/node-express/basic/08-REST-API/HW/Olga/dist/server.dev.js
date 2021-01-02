"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var _require = require('express'),
    response = _require.response;

var fetch = require('node-fetch');

app.use(cookieParser());
app.use(express["static"]('public'));
app.use(bodyParser.json());
app.post('/sendPokemon', function (req, res) {
  var pokemon = req.body.pokemon;
  console.log(pokemon);
  fetch("https://pokeapi.co/api/v2/pokemon/".concat(pokemon)) //event loop
  .then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
    res.send(data); //asynchornic programing
  });
  /* const { city } = req.body;
   console.log(city)
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c72c68beca5025e3cc723b7e0045386&units=metric`) //event loop
       .then(res => res.json())
       .then(weather => {
           res.send({ ok: true, weather }) //asynchornic programing
       });
  
   console.log('cont')*/
});
app.listen(3000, function () {
  console.log('listen 3000');
});