"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-Parser');

var username = ['lior', 'moran'];
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/send_login_information', function (req, res) {
  console.log(req.body);
  var ok = true;
  res.send({
    ok: ok,
    user: user
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});