"use strict";

var express = require('express');

var app = express(); ///server

var bodyParser = require('body-parser');

var _require = require('express'),
    response = _require.response;

var fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(express["static"]('public'));

function getWeather(city1, city2) {
  var weather1, weather2;
  return regeneratorRuntime.async(function getWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getWeather1(city1));

        case 2:
          weather1 = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(getWeather2(city2));

        case 5:
          weather2 = _context.sent;
          console.log(weather1);
          console.log(weather2);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

app.post('/getWeather', function (req, res) {
  var city1 = req.body.city1;
  var city2 = req.body.city2;
  console.log(city1, city2);
  getWeather(city1, city2);
});
/* async function getWeather(city1, city2) {

    let weather1 = await getWeather1Proise(city1);
    console.log(weather1)
    let weather2 = await getWeather2Proise(city2);
   
    console.log(weather2)
    return {weather1,weather2}
}*/

function getWeather1(city1) {
  return new Promise(function (resolve, reject) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(city1, "&appid=cc298c7bc3fd0a6a0af96261903cb0d2")).then(function (res) {
      return res.json();
    }).then(function (data) {
      resolve(data);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function getWeather2(city2) {
  return new Promise(function (resolve, reject) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(city2, "&appid=cc298c7bc3fd0a6a0af96261903cb0d2")).then(function (res) {
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