"use strict";

setInterval(function () {
  fetch('/get-jokes').then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById('root').innerText = "".concat(data.randomJoke);
  });
}, 1000);