"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
app.use(function (req, res, next) {
  console.log("someone called the server: ".concat(req.url, " "));
  next();
});
app.get('/get-jokes', function (req, res) {
  res.send({
    randomJoke: randomJoke
  });
});
var port = 3000;
app.listen(port, function () {
  console.log('server is lisining', port);
});