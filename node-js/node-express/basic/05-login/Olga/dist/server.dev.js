"use strict";

var express = require("express");

var app = express();

var cookieParser = require("cookie-parser");

app.use(cookieParser());
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(port);
});