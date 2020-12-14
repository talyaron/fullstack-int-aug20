"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser()); // app.use(bodyParser.urlencoded({ extended: false }));

var user = [];
app.post('/send-user', function (req, res) {
  user.push(req.body.user);
  var json_str = JSON.stringify(user); // const {user} = req.body;

  res.cookie('user', json_str, {
    maxAge: 5000000,
    httpOnly: true
  });
  var json_perse = req.cookies.user;
  var arr = JSON.parse(json_perse);
  res.send({
    ok: true,
    arr: arr
  });
});
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});