"use strict";

function getWeather(e) {
  e.preventDefault();
  var city1 = e.target.city1.value;
  var city2 = e.target.city2.value;
  var cities = {
    city1: city1,
    city2: city2
  };
  console.log(city1, city2);
  fetch('/getWeather', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cities)
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    console.log(data);
  });
}