"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
var array = [{
  username: "John",
  password: "Black"
}, {
  username: "Olga",
  password: "Blue"
}, {
  username: "Michael",
  password: "Red"
}, {
  username: "Leonid",
  password: "Green"
}];
app.post('/check-user', function (req, res) {
  console.log(req.body);
  var user = req.body.user;
  console.log(user.username);
  var check = array.some(function (o) {
    return o.username === user.username && o.password === user.password;
  });
  console.log(check);

  if (check) {
    res.cookie("userAuthorized", user, {
      maxAge: 30000,
      httpOnly: false
    });
  }

  res.send({
    check: check
  });
});
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});