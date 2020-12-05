"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
var port = 3000;
app.listen(port, function () {
  console.log('server is lisining', port);
});