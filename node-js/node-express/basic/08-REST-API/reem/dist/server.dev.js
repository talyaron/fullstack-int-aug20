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
  fetch("https://api.greeninvoice.co.il/api/v1/", {
    "method": "GET",
    "body": {
      "secret": "",
      "kem": ""
    }
  }) // .then(response => {
  // 	console.log(response);
  // })
  // .catch(err => {
  // 	console.error(err);
  // });
  .then(function (res) {
    return res.json();
  }).then(function (response) {
    res.send({
      ok: true,
      response: response
    }); //asynchornic programing
  });
  console.log('cont');
});
app.listen(3000, function () {
  console.log('listen 3000');
});