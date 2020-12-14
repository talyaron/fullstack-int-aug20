"use strict";

var express = require("express");

var app = express();

var cookieParser = require("cookie-parser");

app.use(express["static"]("public"));
app.use(cookieParser()); // מדפיס עוגיות

app.use(function (req, res, next) {
  var iFollowYou = req.cookies.iFollowYou;
  console.log(iFollowYou); // מייצר עוגיות

  if (!iFollowYou) {
    res.cookie("iFollowYou", "this-is-my-cookie1111");
    iFollowYou = "this-is-my-cookie1111";
  }

  ;
  res.message = iFollowYou;
  next();
});
app.get('/', function (req, res) {
  res.send("<h1>".concat(res.message, "</h1>"));
}); // מתחבר לכתובת

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(port);
});