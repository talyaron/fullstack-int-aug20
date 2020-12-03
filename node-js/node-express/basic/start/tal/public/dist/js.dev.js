"use strict";

// alert('I am here')
setInterval(function () {
  fetch('/get-number-of-dogs').then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById('root').innerText = "I have ".concat(data.numberOfDogs, " dogs");
  });
}, 5000);