"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
var user = [];
app.post('/send-user', function (req, res) {
  var IFollowYou = req.cookies.IFollowYou;
  console.log(IFollowYou);
  var test = '';

  if (IFollowYou !== undefined) {
    test = "".concat(IFollowYou, " -- ").concat(req.body.buttonInnertext);
  } else {
    test = ">> ".concat(req.body.buttonInnertext);
  }

  res.cookie('IFollowYou', test, {
    maxAge: 5000000,
    httpOnly: true
  });
  res.send({
    test: test
  }); // console.log(req.body)
});
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});