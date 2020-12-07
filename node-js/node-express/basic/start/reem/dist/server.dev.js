"use strict";

var express = require('express');

var app = express();

var oneLinerJoke = require('one-liner-joke');

var getRandomJoke;
var joke; // console.log(getRandomJoke.body)

app.use(express["static"]('public')); //use this middlware

setInterval(function () {
  getRandomJoke = oneLinerJoke.getRandomJoke();
  joke = getRandomJoke.body;
}, 10000); //the server response to the client

app.get('/get-joke', function (req, res) {
  res.send({
    joke: joke
  });
});
var port = 3000;
app.listen(port, function () {
  console.log('server listen on port', port);
});