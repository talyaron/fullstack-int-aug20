"use strict";

/* const express = require('express');
const bodyParser = require('body-Parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser()); */
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/buttonsClicked', function (req, res) {
  var IFollowYou = req.cookies.IFollowYou;
  console.log(IFollowYou);
  var test = "".concat(IFollowYou, " =>  ").concat(req.body.buttonInnertext);
  res.cookie('IFollowYou', test, {
    maxAge: 5000000,
    httpOnly: true
  });
  res.send({
    test: test
  }); // console.log(req.body)
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});