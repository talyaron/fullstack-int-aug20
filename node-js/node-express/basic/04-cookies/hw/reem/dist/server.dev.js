"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
var user = [];
app.post('/send-user', function (req, res) {
  user.push(req.body.user);
  console.log(user); // const {user} = req.body;

  res.cookie('user', user, {
    maxAge: 5000000,
    httpOnly: true
  });
  res.send({
    ok: true
  });
});
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});