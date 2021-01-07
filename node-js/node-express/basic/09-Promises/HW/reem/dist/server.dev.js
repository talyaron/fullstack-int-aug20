"use strict";

var express = require('express');

var app = express(); ///server

var bodyParser = require('body-parser');

var _require = require('express'),
    response = _require.response;

var fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/click', function _callee(req, res) {
  var _req$body, city1, city2, weathers;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log(req.body);
          _req$body = req.body, city1 = _req$body.city1, city2 = _req$body.city2;
          _context.next = 5;
          return regeneratorRuntime.awrap(getWeather(city1, city2));

        case 5:
          weathers = _context.sent;
          console.log(weathers);
          res.send({
            ok: true,
            weathers: weathers
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});

function getWeather(city1, city2) {
  try {
    return new Promise(function (resolve, reject) {
      Promise.all([getWeatherPromise(city1), getWeatherPromise(city2)]).then(function (results) {
        console.log(results);
        resolve(results);
      });
    });
  } catch (e) {
    console.log(e);
  }
}

function getWeatherPromise(city) {
  return new Promise(function (resolve, reject) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=8ed5c42360ded19ae240c58a88183a6f")).then(function (res) {
      return res.json();
    }).then(function (data) {
      resolve(data);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

app.listen(3000, function () {
  console.log('listen 3000');
});