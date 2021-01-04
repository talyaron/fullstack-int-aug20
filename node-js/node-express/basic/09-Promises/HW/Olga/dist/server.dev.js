"use strict";

var express = require('express');

var app = express(); ///server

var bodyParser = require('body-parser');

var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express["static"]('public')); //all static files, that client get , html, js , img , css
//send random number to client

app.post('/sendRandomNumber', function (req, res) {
  //req = request from client; res = response to client
  try {
    var randomNumber = req.body.randomNumber;
    console.log(randomNumber);
    if (typeof randomNumber !== 'number') throw new Error('randomNumber is not a number');
    res.send({
      number: Math.ceil(Math.random() * randomNumber)
    });
  } catch (e) {
    console.log('at sendRandomNumber', e);
  }
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
}); //listen to clients requests