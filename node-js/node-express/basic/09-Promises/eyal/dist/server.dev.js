"use strict";

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
app.post('/getLang', function _callee(req, res) {
  var AllLangs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(detectlanguage());

        case 2:
          AllLangs = _context.sent;
          res.send({
            AllLangs: AllLangs
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/SendTraslation', function _callee2(req, res) {
  var fromLang, toLang, Transaction;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fromLang = req.formlang;
          toLang = rew.toLang;
          _context2.prev = 2;
          console.log(req.body.message);
          _context2.next = 6;
          return regeneratorRuntime.awrap(translate("".concat(fromLang), "".concat(toLang), req.body.message));

        case 6:
          Transaction = _context2.sent;
          console.log(Transaction);
          res.send({
            Transaction: Transaction
          });
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 11]]);
});

function detectlanguage() {
  var languages;
  return regeneratorRuntime.async(function detectlanguage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch("https://ws.detectlanguage.com/0.2/languages").then(function (response) {
            return response.json({
              response: response
            });
          }).then(function (response) {
            languages = response; //console.log('ok' ,response )
          })["catch"](function (err) {
            console.error(err);
          }));

        case 2:
          return _context3.abrupt("return", languages);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

;

var translate = function translate(fromLng, toLng, massage) {
  var translatedMessage, textToTranslate;
  return regeneratorRuntime.async(function translate$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          textToTranslate = encode(massage); //let Tkey = await setKey;// no nead - so canceld

          _context4.next = 3;
          return regeneratorRuntime.awrap(fetch("\n    https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=".concat(fromLng, "%7C").concat(toLng, "&q=").concat(textToTranslate, "&mt=1&onlyprivate=1&de=a%40b.c"), {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0',
              'x-rapidapi-host': 'translated-mymemory---translation-memory.p.rapidapi.com'
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
          return _context4.abrupt("return", translatedMessage);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};

app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});