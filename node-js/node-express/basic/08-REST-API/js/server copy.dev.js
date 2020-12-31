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
fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com"
  },
  "body": {
    "q": "Hello, world!",
    "source": "en",
    "target": "iw"
  }
}).then(function (response) {
  console.log(response);
})["catch"](function (err) {
  console.error(err);
});
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});