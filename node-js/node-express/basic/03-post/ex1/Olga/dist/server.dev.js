"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/send-user', function (req, res) {
  console.log(req.body);
  console.log(username, password);
  res.send({
    ok: true,
    body: req.body.username
  });
});
var array = [{
  username: "John",
  password: "Black"
}, {
  username: "Olga",
  password: "Blue"
}, {
  username: "Michael",
  password: "Red"
}, {
  username: "Leonid",
  password: "Green"
}];
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
}); //listen to clients requests