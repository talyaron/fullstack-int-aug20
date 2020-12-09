"use strict";

setInterval(function () {
  fetch('/randomJoke').then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById('container').innerHTML = "<h1>".concat(data.joke, "</h1>");
    console.log(data.joke);
  });
}, 5000);