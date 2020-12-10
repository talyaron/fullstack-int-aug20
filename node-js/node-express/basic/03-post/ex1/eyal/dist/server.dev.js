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
  console.log(req.body);
  res.send({
    /*  ok:true,  */
    USER: req.body.UserID,
    Pass: req.body.Pass
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});