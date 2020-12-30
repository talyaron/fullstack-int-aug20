"use strict";

/******************************************
 *  Author : eyal shemuel
 *  Created On : Mon Dec 28 2020
 *  File : server.js.js
 *******************************************/
var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var fetch = require('node-fetch');

var app = express();
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/SendmMessage', function (req, res) {
  ////AI BOT
  var massege = req.body.massege;
  fetch("https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=".concat(massege), {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0',
      'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com'
    }
  }).then(function (response) {
    return response.json({
      response: response
    });
  }).then(function (response) {
    console.log(response);
    res.send(response);
  })["catch"](function (err) {
    console.error(err);
  });
}); ////traslate

/* fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
	},
	"body": {
		"q": "Hello, world!",
		"source": "en",
		"target": "es"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); */

app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});