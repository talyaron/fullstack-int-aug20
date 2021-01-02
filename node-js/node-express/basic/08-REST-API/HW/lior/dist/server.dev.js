"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var _require = require('express'),
    response = _require.response;

var fetch = require('node-fetch');

var request = require('request');

app.use(cookieParser());
app.use(express["static"]('public'));
app.use(bodyParser.json()); //app.post('/sendTitle', (req, res) => {
// const { city } = req.body;
// console.log(city)

fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007") //event loop
.then(function (res) {
  return res.json();
}).then(function (weather) {
  res.send({
    ok: true,
    weather: weather
  }); //asynchornic programing
}); //})

app.listen(3000, function () {
  console.log('listen 3000');
});