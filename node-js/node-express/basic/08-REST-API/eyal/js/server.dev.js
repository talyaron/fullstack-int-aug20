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

var _require = require('url-encode-decode'),
    encode = _require.encode,
    decode = _require.decode;

var app = express();
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/SendMessage', function _callee(req, res) {
  var EngTransaction, RobotMassage, hebTransaction;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log(req.body.message); // translate massage to english

          _context.next = 4;
          return regeneratorRuntime.awrap(translate('iw', 'en', req.body.message));

        case 4:
          EngTransaction = _context.sent;
          console.log(EngTransaction); // send massage to the robot 

          _context.next = 8;
          return regeneratorRuntime.awrap(SendMessageToRobot(EngTransaction));

        case 8:
          RobotMassage = _context.sent;
          console.log(RobotMassage); //translate massage to hebrew

          _context.next = 12;
          return regeneratorRuntime.awrap(translate('en', 'iw', RobotMassage));

        case 12:
          hebTransaction = _context.sent;
          console.log(hebTransaction);
          res.send({
            hebTransaction: hebTransaction
          });
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
});

function SendMessageToRobot(massage) {
  var robotResponseMsg;
  return regeneratorRuntime.async(function SendMessageToRobot$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=".concat(massage), {
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
            robotResponseMsg = response.cnt;
          })["catch"](function (err) {
            console.error(err);
          }));

        case 2:
          return _context2.abrupt("return", robotResponseMsg);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function translate(fromLng, toLng, massage) {
  var translatedMessage, textToTranslate;
  return regeneratorRuntime.async(function translate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          textToTranslate = encode(massage);
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch("https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=".concat(fromLng, "%7C").concat(toLng, "&q=").concat(textToTranslate, "&mt=1&onlyprivate=1&de=a%40b.c"), {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
              "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com"
            }
          }).then(function (response) {
            return response.json({
              response: response
            });
          }).then(function (response) {
            translatedMessage = response.responseData.translatedText;
          })["catch"](function (err) {
            console.error(err);
          }));

        case 3:
          return _context3.abrupt("return", translatedMessage);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});