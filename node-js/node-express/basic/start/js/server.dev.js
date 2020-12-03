"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
var port = 8080;
app.listen(port, function () {
  console.log('listening on port 8080', port);
});