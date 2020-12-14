"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var users = ['reem', 'morit', 'rivka', 'nehonya'];
var password = [9968096];
app.post("/login", function (req, res) {
  var username = req.body.username;
  var regExp = new RegExp(username, "g");

  if (regExp.test(users)) {
    res.redirect("/success.html");
  } else {
    res.redirect("/fail.html");
  }
});
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});