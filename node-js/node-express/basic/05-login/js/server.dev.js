"use strict";

var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

var cookiesPractice = require('cookie-parser');

var bodyParser = require('body-Parser');

var UserDitles = {
  UserID: "eyal",
  Pass: "123"
};
app.use(bodyParser.json());
app.use(cookiesPractice());
app.post('/U_info', function (req, res) {
  var myUserIDs = req.cookies.myUserIDs;
  console.log('sending to the claient: ' + req.body);
  uditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  };

  if (req.body.UserID == UserDitles.UserID && req.body.mypass == UserDitles.Pass) {
    res.cookie('myUserIDs', uditails, {
      maxAge: 3000
    });
    res.send({
      ok: true
    });
  } else {
    res.send({
      ok: false
    });
  }

  console.log(req.body.UserID);
});
app.post('/add_user', function (req, res) {});
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});