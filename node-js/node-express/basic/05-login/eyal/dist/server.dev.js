"use strict";

//https://www.xspdf.com/resolution/50688133.html
// https://www.w3schools.com/js/js_cookies.asp
var express = require('express');

var app = express();

var path = require('path');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-Parser');

var _require = require('body-Parser'),
    json = _require.json;

var UserDitles = {
  UserID: 'eyal',
  Pass: '123'
}; // default user ditties

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express["static"]('public'));
app.post('/U_info', function (req, res) {
  var myUserIDs = req.cookies.myUserIDs; // console.log(getCookie("myUserIDs"))

  var test = myUserIDs;
  console.log(myUserIDs);
  var uditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  };

  if (req.body.UserID == UserDitles.UserID && req.body.mypass == UserDitles.Pass) {
    console.log('passed');
    res.send({
      ok: true
    });
  } else {
    res.send({
      ok: false
    });
  }

  console.log(req.body.UserID);
  console.log(test);
}); // add user to cookie

app.post('/Change_user', function (req, res) {
  var myUserIDs = req.cookies.myUserIDs; //get all cookies

  var NewUditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  }; //the userID that the user typed

  var ud = JSON.stringify(NewUditails);

  if (myUserIDs) {
    // if cookie is present
    var userIdArry = JSON.parse("[".concat(myUserIDs, "]")); // set the cookie as object
    // try to filter the object and find if the user is exist

    var filteredArray = userIdArry.filter(function (user) {
      return user.id === NewUditails.id;
    });
    var resultarry = filteredArray[0]; //in case we will find more the one take the first

    if (resultarry == undefined) {
      myUserIDs = "".concat(myUserIDs, ",").concat(ud);
      console.log("add: ".concat(ud));
    } else {
      myUserIDs = "".concat(ud);
      console.log("user: ".concat(myUserIDs, " is axisit"));
    }
  }

  res.cookie('myUserIDs', myUserIDs, {
    maxAge: 3000000
  });
  res.send();
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});