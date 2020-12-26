"use strict";

/******************************************
 *  Author : eyal shemuel   
 *  Created On : Tue Dec 22 2020
 *  File : server.js.js
 *******************************************/
var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
var users = [];
var products = [];
app.post('/U_info', function (req, res) {
  var myUserIDs = req.cookies.myUserIDs; //get all cookies

  var userIdArry = JSON.parse("[".concat(myUserIDs, "]")); // set the cookie as object

  var NewUditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  }; //the userID that the user typed - 

  var filteredArray = userIdArry.filter(function (user) {
    return user.id === NewUditails.id;
  });
  var resultarry = filteredArray[0]; //in case we will find more the one take the first

  if (req.body.UserID == resultarry.id && req.body.mypass == resultarry.pass) {
    console.log('passed');
    res.cookie('userAuthorized', 'OK', {
      maxAge: 300
    }); // res.redirect(307,'/ok.html');

    res.send({
      ok: true
    });
  } else {
    console.log('rejected');
    res.send({
      ok: false
    });
  }
}); // add user to cookie

app.post('/Change_user', function (req, res) {
  var myUserIDs = req.cookies.myUserIDs; //get all cookies

  var NewUditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  }; //the userID that the user typed - 

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

    res.cookie('myUserIDs', myUserIDs, {
      maxAge: 3000000
    });
  } else {
    myUserIDs = "".concat(ud);
    res.cookie('myUserIDs', myUserIDs, {
      maxAge: 3000000
    });
  }

  res.send();
});
app.get('/read', function (req, res) {
  //the client get something from the server (also called READ)
  res.send({
    ok: true,
    products: products
  });
});
app.post("/post", function (req, res) {
  //the client send somthing to the server (also called CREATE)
  console.log(req.body);
  products.push(req.body);
  console.log(products);
  res.send({
    ok: true,
    products: products
  });
});
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});