"use strict";

/******************************************
 *  Author : eyal shemuel   
 *  Created On : Mon Dec 28 2020
 *  File : server.js.js
 *******************************************/
var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});