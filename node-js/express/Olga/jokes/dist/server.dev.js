"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
var jokes = ["The H in 'PROGRAMMING' stands for happiness", "2b||!2b", "There are 10 types of people in this world. </br>Those that know binary and those that don’t", "How many programmers does it take to change a light bulb? - None, that’s a hardware problem", "If you start to drive a fly off the monitor with the mouse cursor, it's time to shut down the computer."];
var joke;
app.use(function (req, res, next) {
  console.log("".concat(joke));
  next();
});
app.get('/randomJoke', function (req, res) {
  joke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send({
    joke: joke
  });
});
var port = 3000;
app.listen(port, function () {
  console.log('listen on port 3000');
});