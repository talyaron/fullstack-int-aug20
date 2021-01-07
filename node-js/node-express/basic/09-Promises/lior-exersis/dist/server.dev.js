"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

var fetch = require('node-fetch'); //var cors = require('cors')


app.use(express["static"]('public'));
app.use(bodyParser.json());
app.post('/sendCityWeather', function (req, res) {
  console.log(req.body);
  var city1 = req.body;
  fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=".concat(city1, "&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html"), {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "d27ad88beamsh2505efd620ca6edp10ba77jsnf02f7cbe9f7a",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  });
});
app.listen(3000, function () {
  console.log('listen 3000');
});