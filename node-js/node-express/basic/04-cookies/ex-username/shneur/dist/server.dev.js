"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/user_information', function (req, res) {
  // const {mycookie} = req.cookies;
  res.cookie("yourName", req.body.userName, {
    maxAge: 5000000
  });
  res.send({
    ok: true
  });
  console.log(req.body);
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});