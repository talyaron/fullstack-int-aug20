"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.post('/push', function (req, res) {
  var count = req.cookies.count;
  var pbooten = '';
  console.log(count);

  if (count !== undefined) {
    pbooten = "".concat(count, " -- ").concat(req.body.pushed);
  } else {
    pbooten = "".concat(req.body.pushed);
  }

  res.cookie('count', pbooten, {
    maxAge: 5000000,
    httpOnly: false
  });
  res.send({
    pbooten: pbooten
  });
});
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});