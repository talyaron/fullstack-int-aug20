"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.post('/send-namebutton', function (req, res) {
  var IFollowYou = req.cookies['nameBtn'];

  if (!IFollowYou) {
    IFollowYou = [];
  }

  IFollowYou.push(req.body.nameBtn);
  res.cookie('nameBtn', IFollowYou, {
    maxAge: 5000000,
    httpOnly: true
  });
  console.log(req.body);
  console.log(IFollowYou);
  res.send(IFollowYou);
});
/*app.post('/send-user',(req, res)=>{

    const {user} = req.body;
    
    res.cookie('user',user, { maxAge: 5000000, httpOnly: true });

    res.send({ok:true})
})*/

app.use(express["static"]('public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});