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
app.post("/getbtn", function (req, res) {
  var btnClicked = req.body.btnClicked;
  res.cookie(btnClicked, {
    maxAge: 5000000,
    httpOnly: true
  });
  res.send("Cookie Saved");
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});