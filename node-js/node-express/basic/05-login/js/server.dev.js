"use strict";

var express = require('express');

var app = express();

var path = require('path');

var cookiesPractice = require('cookie-parser');

var bodyParser = require('body-Parser');

var UserDitles = {
  UserID: "eyal",
  Pass: "123"
};
app.use(bodyParser.json());
app.use(cookiesPractice());
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
    console.log("passed"); // res.cookie('myUserIDs', uditails, { maxAge: 3000 });

    res.send({
      ok: true
    });
  } else {
    /*  res.redirect('/Rejected.html') */
    res.send({
      ok: false
    });
  } //  console.log(req.body.UserID)

});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});