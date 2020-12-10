"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

var bodyParser = require("body-parser");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
use.post("/getusername"), function (req, res) {
  var usernameGiven = req.body.username;
  var cookie = req.cookies.cookie;
};
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});