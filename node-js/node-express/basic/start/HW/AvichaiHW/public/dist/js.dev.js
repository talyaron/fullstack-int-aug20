"use strict";

setInterval(function () {
  fetch('/get-new-joke').then(function (response) {
    return response.json().then(function (jokes) {
      document.getElementById('joke').innerText = "".concat(jokes.chosenJoke.joke);
      document.getElementById('answer').innerText = "".concat(jokes.chosenJoke.answer);
    });
  });
}, 5000);