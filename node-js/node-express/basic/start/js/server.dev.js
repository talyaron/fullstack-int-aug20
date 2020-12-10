"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
app.get('/getTime', function (req, res) {
  var dataTime = new Date();
  var TimeNow = dataTime.getTime();
  res.send({
    TimeNow: TimeNow
  });
});
var port = 8080;
app.listen(port, function () {
  console.log('listening on port 8080', port);
});