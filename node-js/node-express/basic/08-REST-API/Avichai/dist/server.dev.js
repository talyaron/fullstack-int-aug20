"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var fetch = require('node-fetch');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/getMovieList', function (req, res) {
  var movie = req.body.movie;
  fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=".concat(movie, "&page=1&r=json"), {
    method: 'GET',
    // *GET, POST, PUT, DELETE, etc.
    headers: {
      "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    // console.log(data.Search)
    var x = data.Search;
    res.send({
      x: x
    });
  });
});
app.post('/getMovieInfo', function (req, res) {
  var movieName = req.body.movieName;
  fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=".concat(movieName, "&page=1&r=json"), {
    method: 'GET',
    // *GET, POST, PUT, DELETE, etc.
    headers: {
      "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    var x = data.Search;
    console.log(x);
    res.send({
      x: x
    });
  });
});
app.listen(3000, function () {
  console.log('listen 3000');
});