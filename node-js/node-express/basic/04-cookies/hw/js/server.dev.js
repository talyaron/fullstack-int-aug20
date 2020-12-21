"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/buttonsClicked', function (req, res) {
  var IFollowYou = req.cookies.IFollowYou;
  console.log(IFollowYou);
  var test = "".concat(IFollowYou, " =>  ").concat(req.body.buttonInnertext);
  res.cookie('IFollowYou', test, {
    maxAge: 5000000,
    httpOnly: true
  });
  res.send({
    test: test
  });
});
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});