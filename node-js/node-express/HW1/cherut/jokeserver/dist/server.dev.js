"use strict";

var express = require('express');

var app = express();

var oneLinerJoke = require('one-liner-joke');

app.use(express["static"]('public')); //use this middlware

var getRandomJoke;
var joke;

function getJoke() {
  getRandomJoke = oneLinerJoke.getRandomJoke();
  joke = getRandomJoke.body;
}

getJoke();
setInterval(getJoke, 2000);
app.get('/get-joke', function (req, res) {
  res.send({
    joke: joke
  });
});
var port = 3000;
app.listen(port, function () {
  console.log('server listen on port', port);
});