"use strict";

var express = require('express');

var app = express();
var UserDitles = {
  UserID: "eyal",
  Pass: "123"
};

var bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/send_user_information', function (req, res) {
  console.log('sending to the claient: ' + req.body);

  if (req.body.UserID == UserDitles.UserID && req.body.mypass == UserDitles.Pass) {
    res.send({
      ok: true
    });
  } else {
    res.send({
      ok: false
    });
  }
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});