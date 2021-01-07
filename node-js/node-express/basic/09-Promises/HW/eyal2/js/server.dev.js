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
app.get('/getLang', function _callee(req, res) {
  var AllLangs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('in the getLang');
          _context.next = 3;
          return regeneratorRuntime.awrap(GetLangFromAPI());

        case 3:
          AllLangs = _context.sent;
          res.send(AllLangs);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/SendTranslation', function _callee2(req, res) {
  var _req$body, UserfromLang, toLang, message, fromLang, transaction;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, UserfromLang = _req$body.UserfromLang, toLang = _req$body.toLang, message = _req$body.message;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(detectLang(message));

        case 4:
          fromLang = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(translate(fromLang, toLang, message));

        case 7:
          transaction = _context2.sent;
          // console.log(transaction);
          res.send({
            transaction: transaction
          });
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 11]]);
});

function detectLang(text) {
  var apiKey, lang;
  return regeneratorRuntime.async(function detectLang$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          apiKey = "ef42a320dae69f2f069d4e419f8c48e3";
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch("https://ws.detectlanguage.com/0.2/detect?q=".concat(encodeURI(text)), {
            method: "GET",
            headers: {
              'Authorization': "Bearer ".concat(apiKey)
            }
          }).then(function (response) {
            return response.json({
              response: response
            });
          }).then(function (response) {
            lang = response.data.detections[0].language;
          })["catch"](function (err) {
            console.error(err);
          }));

        case 3:
          return _context3.abrupt("return", lang);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function GetLangFromAPI() {
  var languages;
  return regeneratorRuntime.async(function GetLangFromAPI$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch("https://ws.detectlanguage.com/0.2/languages").then(function (response) {
            return response.json({
              response: response
            });
          }).then(function (response) {
            languages = response; //   console.log('ok', response)
          })["catch"](function (err) {
            console.error(err);
          }));

        case 2:
          return _context4.abrupt("return", languages);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}

;

var translate = function translate(fromLng, toLng, massage) {
  var translatedMessage, textToTranslate;
  return regeneratorRuntime.async(function translate$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          textToTranslate = encode(massage);
          _context5.next = 3;
          return regeneratorRuntime.awrap(fetch("https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=".concat(fromLng, "%7C").concat(toLng, "&q=").concat(textToTranslate, "&mt=1&onlyprivate=1&de=a%40b.c"), {
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
          return _context5.abrupt("return", translatedMessage);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};

app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});