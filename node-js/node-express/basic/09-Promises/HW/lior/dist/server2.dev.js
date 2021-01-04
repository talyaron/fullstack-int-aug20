"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

var fetch = require('node-fetch');

var cors = require('cors');

app.use(cookieParser());
app.use(express["static"]('public'));
app.use(bodyParser.json());
app.post('/sendTitle', function (req, res) {
  var movie = req.body.movie;
  console.log(movie);
  fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=".concat(movie, "&page=1&r=json"), {
    method: 'GET',
    headers: {
      "x-rapidapi-key": "d27ad88beamsh2505efd620ca6edp10ba77jsnf02f7cbe9f7a",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    var movies = data.Search;
    console.log(movies);
    res.send({
      movies: movies
    });
  });
});
app.listen(3000, function () {
  console.log('listen 3000');
});