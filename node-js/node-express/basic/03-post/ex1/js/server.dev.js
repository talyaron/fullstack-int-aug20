"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/send_user_information', function (req, res) {
  res.send({
    ok: true,
    body: req.body.value
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});