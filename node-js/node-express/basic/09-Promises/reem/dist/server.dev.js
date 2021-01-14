"use strict";

var express = require('express');

var app = express(); ///server

var bodyParser = require('body-parser');

var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express["static"]('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(express["static"]('public'));

var hello = function hello(string, names) {
  var stringInEnglish;
  return regeneratorRuntime.async(function hello$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('translating....');
          _context.next = 3;
          return regeneratorRuntime.awrap(translate(string, 'iw', 'en'));

        case 3:
          stringInEnglish = _context.sent;
          console.log(stringInEnglish + " " + names);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var fetch = function fetch(url, headers) {
  var res;
  return regeneratorRuntime.async(function fetch$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch(url, {
            "method": "GET",
            "headers": headers
          }).then(function (response) {
            return response.json({
              response: response
            });
          }).then(function (response) {
            res = response;
          })["catch"](function (err) {
            console.error(err);
          }));

        case 2:
          return _context2.abrupt("return", res);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

function translate(sentence, langFrom, langTo) {
  var url, host, key, headers, fetchResponse, translatedString;
  return regeneratorRuntime.async(function translate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          url = "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=".concat(langFrom, "%7C").concat(langTo, "&q=").concat(encodeURI(sentence), "&mt=1&onlyprivate=0&de=a%40b.c");
          host = "translated-mymemory---translation-memory.p.rapidapi.com";
          key = "bd210f8d39mshaaa340100e6c6b5p186237jsnd44113e94e03";
          headers = {
            "x-rapidapi-key": key,
            "x-rapidapi-host": host
          };
          _context3.next = 6;
          return regeneratorRuntime.awrap(fetch(url, headers));

        case 6:
          fetchResponse = _context3.sent;
          translatedString = fetchResponse.responseData.translatedText;
          return _context3.abrupt("return", translatedString);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
}

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
}); //listen to clients requests