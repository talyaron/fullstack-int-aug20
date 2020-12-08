"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
var timeSinceRefresh = 1;
app.use(function (req, res, next) {
  next();
});
var jokes = ["we are going to win this game", "this game is easy pisy", "we are grate programars", "you neale this one", "congrates to you you own", "we are the best group evevr"];
app.get('/jokesa', function (req, res) {
  i = Math.floor(Math.random() * 6);
  Choosenjoke = jokes[i];
  console.log(Choosenjoke);
  document.getElementById('box').innerHTML = "<h1>you have loged to this website ".concat(Choosenjoke, " seconds ago</h1>");
  res.send({
    jokes: jokes
  });
});
app.listen(3000);