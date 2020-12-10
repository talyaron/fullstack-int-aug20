"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

var bodyParser = require("body-parser");

app.use(express["static"]('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.post("/getusername", function (req, res) {
  var yourename = req.body.username;
  var cookie = req.cookies.cookie;

  if (cookie !== yourename) {
    res.cookie("yourename", yourename, {
      maxAge: 200000000,
      httpOnly: true
    });
  }
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});