"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
var timeSinceRefresh = 1;
app.use(function (req, res, next) {
  console.log("you have loged to this website ".concat(timeSinceRefresh, " seconds ago"));
  next();
});
app.get('/timeSinceRefresh', function (req, res) {
  res.send({
    timeSinceRefresh: timeSinceRefresh
  });
  timeSinceRefresh++;
});
var port = 3000;
app.listen(port, function () {
  console.log("you have loged to this website ".concat(timeSinceRefresh, " seconds ago"));
});