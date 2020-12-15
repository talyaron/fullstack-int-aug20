"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var correctUser = {
  name: 'reem',
  pwd: 9968096
};
app.post("/login", function (req, res) {
  var user = req.body.user;

  if (user.name == correctUser.name && user.pwd == correctUser.pwd) {
    res.cookie("i-follow-you", user, {
      maxAge: 10000,
      httpOnly: false
    });
    res.send({
      ok: true
    });
  } else {
    res.send({
      ok: false
    });
  }
});
app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});