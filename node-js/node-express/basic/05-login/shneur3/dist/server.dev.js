"use strict";

var express = require("express");

var app = express();

var cookieParser = require("cookie-parser");

app.use(cookieParser());

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post("/send-login", function (req, res) {
  console.log(req.body);
  res.send({
    ok: true
  });
});
app.use(express["static"]("public")); // מתחבר לכתובת

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(port);
});