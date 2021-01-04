"use strict";

var express = require('express');

var app = express(); ///server

var cors = require('cors');

var fetch = require('node-fetch');

app.use(cors());

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express["static"]('public')); //all static files, that client get , html, js , img , css
//send random number to client

app.post('/sendAboutYear', function (req, res) {
  //req = request from client; res = response to client
  var randomNumber = req.body.randomNumber;
  console.log(randomNumber);

  try {
    if (typeof randomNumber !== 'number') {
      throw new Error('multiply is not a number');
    } else {
      fetch("http://numbersapi.com/".concat(randomNumber, "/year?json")).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data.text);
        res.send(data); //asynchornic programing
      });
    }
  } catch (e) {
    console.log('at sendAboutNumber', e);
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