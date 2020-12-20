"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"]("public"));
var users = [{
  username: "morde",
  password: "4567"
}];
var savedUsername;
app.post("/send-user-data", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var validation = false;
  users.forEach(function (e) {
    if (username == e.username && password == e.password) {
      validation = true;
      savedUsername = username;
    } else {
      console.log("Sorry ".concat(e.username, " doesn't exist"));
    }
  });

  if (validation) {
    res.cookie("User validated", username, {
      maxAge: 30000,
      httpOnly: true
    });
  }

  res.send({
    validation: validation
  });
});
app.get("/get-username", function (req, res) {
  res.send({
    savedUsername: savedUsername
  });
});
app.get("/check-valid", function (req, res) {
  var validation = true;
  var checkCookie = req.cookies.validated;

  if (checkCookie == false) {
    validation = false;
  }

  res.send({
    validation: validation
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});