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
    console.log(data.weathers[0].main.temp);
    document.getElementById('temp1').innerHTML = "<div>".concat(Math.round(data.weathers[0].main.temp - 273.15), "\xB0</div>");
    document.getElementById('temp2').innerHTML = "<div>".concat(Math.round(data.weathers[1].main.temp - 273.15), "\xB0</div>");
  });
}