"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());
var _ref = "",
    username = _ref.username;
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});