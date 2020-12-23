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
/* app.post('/buttonsClicked', (req, res) => {
    let { IFollowYou } = req.cookies;
    console.log(IFollowYou);
    const test = `${IFollowYou} =>  ${req.body.buttonInnertext}`;
    res.cookie('IFollowYou', test, { maxAge: 5000000, httpOnly: true });
    res.send({
        test
    });
   
}); */

app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});