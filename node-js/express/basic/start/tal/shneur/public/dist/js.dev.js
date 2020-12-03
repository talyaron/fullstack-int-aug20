"use strict";

setInterval(function () {
  fetch('/timeSinceRefresh').then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById('box').innerHTML = "<h1>you have loged to this website ".concat(data.timeSinceRefresh, " seconds ago</h1>");
  });
}, 1000);