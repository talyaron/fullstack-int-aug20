"use strict";

setInterval(function () {
  fetch('/getjock').then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById('root').innerHTML = "".concat(data.randjock);
    console.log(data);
  });
}, 1000);