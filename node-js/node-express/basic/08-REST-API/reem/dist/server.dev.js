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
app.post('/sendCity', function (req, res) {
  // fetch('api.openweathermap.org/data/2.5/weather?q=jerusalem&appid=9c72c68beca5025e3cc723b7e0045386')
  var city = req.body.city;
  console.log(city);
  fetch("https://covid-19-data.p.rapidapi.com/report/country/name?date=2020-12-28&name=Israel", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "ef43e6d47amsh4cf6fbca708489fp108d1djsn0c4fa57ab462",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    }
  }) // .then(response => {
  // 	console.log(response);
  // })
  // .catch(err => {
  // 	console.error(err);
  // });
  .then(function (res) {
    return res.json();
  }).then(function (weather) {
    res.send({
      ok: true,
      weather: weather
    }); //asynchornic programing
  });
  console.log('cont');
});
app.listen(3000, function () {
  console.log('listen 3000');
});