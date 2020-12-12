"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express["static"]('public'));
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
  var user = req.body.username;
  var pass = req.body.password;
  var ok;
  array.forEach(function (elm) {
    if (elm.username == user && elm.password == pass) {
      ok = true;
    } else ok = false;
  });
  res.send({
    k: ok,
    user: req.body.username,
    pass: req.body.password
  });
});
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
}); //listen to clients requests