"use strict";

var express = require('express');

var app = express();

var path = require('path');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express["static"]('public'));
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
});
/*  not working ---------------------------------------------------
app.post("/U_info", (req, res) => {

    const { myUserIDs } = req.cookies; //get all cookies
    const userIdArry = JSON.parse(`[${myUserIDs}]`); // set the cookie as object
    const NewUditails = { id: req.body.UserID, pass: req.body.mypass }; //the userID that the user typed - 
    const filteredArray = userIdArry.filter((user) => user.id === NewUditails.id);
    let resultarry = filteredArray[0]; //in case we will find more the one take the first
     
    if (
      req.body.UserID == resultarry.id &&
      req.body.mypass == resultarry.pass
    ) {
      console.log('passed');
      res.redirect("/ok.html");
    } else {
      console.log('rejected');
      res.redirect("/Rejected.html");
    }
  
  });
  -------------------------------------------------------------------- */
// add user to cookie

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
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});