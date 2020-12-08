"use strict";

function getJoke() {
  fetch('/get-joke').then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById('root').innerText = "".concat(data.joke);
  });
}

getJoke();
var myloop = setInterval(getJoke, 2000);
var pouse = false;

function stop() {
  if (pouse == false) {
    console.log('jh');
    clearInterval(myloop);
    pouse = true;
  } else {
    pouse = false;
    getJoke();
    setInterval(getJoke, 1000);
  }
}