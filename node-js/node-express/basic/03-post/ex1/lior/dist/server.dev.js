"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.use(express["static"]('public'));
var login = [{
  username: 'lior',
  password: '1111'
}, {
  username: 'moran',
  password: '2222'
}, {
  username: 'cherut',
  password: '3333'
}, {
  username: 'tal',
  password: '4444'
}];
var user = login.map(function (a) {
  return a.username;
});
var pass = login.map(function (a) {
  return a.password;
});
app.post('/send_login_information', function (req, res) {
  console.log('sending to the claient: ' + req.body);

  if (req.body.UserID == user && req.body.password == Pass) {
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