"use strict";

var express = require('express');

var app = express(); ///server

var bodyParser = require('body-parser');

var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express["static"]('public')); //all static files, that client get , html, js , img , css
//send random number to client

app.post('/sendUpperNumber', function (req, res) {
  //req = request from client; res = response to client
  try {
    var upperNumber = req.body.upperNumber;
    if (typeof upperNumber !== 'number') throw new Error('upperNumber is not a number');
    res.send({
      number: Math.ceil(Math.random() * upperNumber)
    });
  } catch (e) {
    console.log('at sendUpperNumber', e);
  }
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
}); //listen to clients requests