"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
var useres = [{
  name: 'lior',
  code: '1111'
}, {
  name: 'moran',
  code: '2222'
}, {
  name: 'gilad',
  code: '3333'
}, {
  name: 'cherut',
  code: '4444'
}, {
  name: 'olga',
  code: '5555'
}];
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});