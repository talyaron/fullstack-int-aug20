"use strict";

setInterval(function () {
  fetch('/get-joke').then(function (response) {
    return response.json();
  }).then(function (data) {
    document.querySelector('.root').innerHTML = "<h1> ".concat(data.joke, "</h1> ");
  });
}, 10000);