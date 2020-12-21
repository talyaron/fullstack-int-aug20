"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.post('/push', function (req, res) {
  var count = req.body.pushed.count;

  if (!count) {
    res.cookie('count', req.body.pushed, {
      maxAge: 5000000,
      httpOnly: false
    });
  }
});
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});