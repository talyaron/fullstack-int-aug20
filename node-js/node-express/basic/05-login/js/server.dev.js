"use strict";

var express = require('express');

var app = express();

var path = require('path');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-Parser');

var UserDitles = {
  UserID: "eyal",
  Pass: "123"
}; // default user ditties

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.post('/U_info', function (req, res) {
  var myUserIDs = req.cookies.myUserIDs;
  console.log('sending to the claient: ' + req.body);
  var uditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  };

  if (req.body.UserID == UserDitles.UserID && req.body.mypass == UserDitles.Pass) {
    /*   res.redirect("/ok.html"); */
    console.log("passed");
    res.send({
      ok: true
    });
  } else {
    /*  res.redirect('/Rejected.html') */
    res.send({
      ok: false
    });
  }

  console.log(req.body.UserID);
});
app.post('/add_user', function (req, res) {
  var Users = req.cookies.Users;
  var uditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  };
  /*  const myusers =  Users.push(req.body.UserID,req.body.mypass);
  */
  // console.log(`add user ${uditails.id}, ${uditails.pass}`)

  console.log(req.cookies);
  res.cookie('myUserIDs', uditails, {
    maxAge: 300000
  });
  res.send();
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});