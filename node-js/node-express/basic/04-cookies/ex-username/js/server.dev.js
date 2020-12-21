"use strict";

var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

var cookiesPractice = require('cookie-parser');

var bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.use(cookiesPractice());
app.post('/send_user_information', function (req, res) {
  var myUserIDs = req.cookies.myUserIDs;
  res.cookie('myUserIDs', req.body.UserID, {
    maxAge: 300000
  });
  res.send({
    OK: true
  });
  console.log(req.body.UserID);
});
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});