"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"]('public'));
var users = ['reem', 'morit', 'rivka', 'nehonya'];
app.post('/userName', function (req, res) {
  var username = req.body.username;
  var regExp = new RegExp(username, "g");

  if (regExp.test(users)) {
    res.redirect("/success.html");
  } else {
    res.redirect("/fail.html");
  }
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});