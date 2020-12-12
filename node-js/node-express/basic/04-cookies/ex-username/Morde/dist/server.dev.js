"use strict";

var express = require("express");

var cookieParser = require("cookie-parser");

var bodyParser = require("body-parser");

var app = express();
app.use(cookieParser());
app.use(express["static"]("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.post("/getusername", function (req, res) {
  var usernameGiven = req.body.username;
  var usernameCookie = req.cookies.usernameCookie;

  if (usernameCookie !== usernameGiven) {
    res.cookie("usernameGiven", usernameGiven, {
      maxAge: 5000000,
      httpOnly: true
    });
  }

  res.send("Got it!");
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});