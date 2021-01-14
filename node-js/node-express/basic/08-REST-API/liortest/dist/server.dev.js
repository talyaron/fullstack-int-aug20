"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

var fetch = require('node-fetch');

var cors = require('cors');

app.use(express["static"]('public'));
app.use(bodyParser.json());
app.post('/sendTitle', function (req, res) {
  var music = req.body.music;
  console.log(music);
  fetch("https://shazam.p.rapidapi.com/auto-complete?term=".concat(music, "&locale=en-US"), {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "d27ad88beamsh2505efd620ca6edp10ba77jsnf02f7cbe9f7a",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    var songs = data.Search;
    console.log(songs);
    res.send({
      songs: songs
    });
  });
});
app.listen(3000, function () {
  console.log('listen 3000');
});