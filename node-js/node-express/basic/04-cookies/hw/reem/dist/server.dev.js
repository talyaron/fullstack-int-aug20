"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser()); // app.use(bodyParser.urlencoded({ extended: false }));

var user = [];
app.post('/send-user', function (req, res) {
  user.push(req.body.user);
  var json_str = JSON.stringify(user); // const {user} = req.body;

  var IFollowYou = req.cookies.IFollowYou;
  var test = "".concat(IFollowYou, " =>  ").concat(req.body.buttonInnertext);
  res.cookie('IFollowYou', json_str, {
    maxAge: 5000000,
    httpOnly: true
  });
  var json_perse = req.cookies.user;
  var arr = JSON.parse(json_perse);
  res.send({
    json_str: json_str
  });
}); // app.post('/buttonsClicked', (req, res) => {
// let {IFollowYou} = req.cookies;
//  console.log(IFollowYou);
// const test = `${IFollowYou} =>  ${req.body.buttonInnertext}`;
// res.cookie('IFollowYou',test, { maxAge: 5000000, httpOnly: true }); 
// res.send({
//     test
// });

app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});