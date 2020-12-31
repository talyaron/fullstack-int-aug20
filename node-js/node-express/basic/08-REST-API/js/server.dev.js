"use strict";

/******************************************
 *  Author : eyal shemuel   
 *  Created On : Mon Dec 28 2020
 *  File : server.js.js
 *******************************************/
var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var fetch = require('node-fetch');

var app = express();
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.get('/sendCity', function (req, res) {
  console.log('tt');
  fetch("https://dark-sky.p.rapidapi.com/33,33?lang=en&units=auto", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
      "x-rapidapi-host": "dark-sky.p.rapidapi.com"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    console.log(response);
    res.send(response);
  })["catch"](function (err) {
    console.error(err);
  });
});
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});