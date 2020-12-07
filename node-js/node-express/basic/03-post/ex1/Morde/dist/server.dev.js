"use strict";

var express = require("express");

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"]("public"));
var usersArray = ["morde", "tal", "eyal", "guy"];
app.post("/login", function (req, res) {
  var username = req.body.username;
  var regExp = new RegExp(username, "g");

  if (regExp.test(usersArray)) {
    res.redirect("/success.html");
  } else {
    res.redirect("/failure.html");
  }
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server listen on port", port);
});