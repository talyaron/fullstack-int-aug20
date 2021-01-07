"use strict";

var express = require('express');

var app = express(); ///server

var cors = require('cors');

app.use(cors());

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express["static"]('public')); //all static files, that client get , html, js , img , css
//send random number to client

app.post('/sendMultiply', function (req, res) {
  //req = request from client; res = response to client
  try {
    var multiply = req.body.multiply;
    if (typeof multiply !== 'number') throw new Error('multiply is not a number');
    res.send({
      number: multiply * 10
    });
  } catch (e) {
    console.log('at sendMultiply', e);
    res.send({
      number: 0,
      ok: false,
      error: e
    });
  }
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
}); //listen to clients requests