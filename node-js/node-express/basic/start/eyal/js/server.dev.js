"use strict";

var jocks = [{
  title: 'aa',
  jock: 'a chiken '
}, {
  title: 'aa',
  jock: 'a tertel'
}, {
  title: 'aa',
  jock: 'a duck'
}];

var express = require('express');

var app = express();
app.use(express["static"]('public'));
app.get('/getjock', function (req, res) {
  var randjockNum = Math.floor(Math.random() * jocks.length);
  var randjock = jocks[randjockNum].jock;
  res.send({
    randjock: randjock
  });
});
var port = 8080;
app.listen(port, function () {
  console.log('listening on port 8080', port);
});