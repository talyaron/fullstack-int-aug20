"use strict";

//https://www.xspdf.com/resolution/50688133.html
// https://www.w3schools.com/js/js_cookies.asp
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
app.use(express["static"]('public'));
app.post('/U_info', function (req, res) {
  var myUserIDs = req.cookies.myUserIDs;
  var test = myUserIDs;
  console.log(myUserIDs);
  var uditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  };

  if (req.body.UserID == UserDitles.UserID && req.body.mypass == UserDitles.Pass) {
    console.log("passed");
    res.send({
      ok: true
    }); // res.redirect("/ok.html")
  } else {
    /*  res.redirect('/Rejected.html') */
    res.send({
      ok: false
    });
  }

  console.log(req.body.UserID);
});
app.post('/add_user', function (req, res) {}); // add user to cookie

app.post('/Change_user', function (req, res) {
  //  let { Users } = req.cookies;
  var uditails = {
    id: req.body.UserID,
    pass: req.body.mypass
  };
  var ud = JSON.stringify(uditails); //let Users1 = JSON.stringify(Users);

  /*  console.log(Users)
   if ((Users==null) || (Users==undefined)){
       test = `${ud}`;
   }else{
       test = `${Users},${ud}`;
   } */

  test = "".concat(ud); //  console.log(test)

  res.cookie('myUserIDs', test, {
    maxAge: 300000
  });
  res.send();
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});