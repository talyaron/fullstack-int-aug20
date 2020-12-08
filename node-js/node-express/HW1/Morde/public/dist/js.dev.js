"use strict";

fetch('/getjokes').then(function (response) {
  return response.json();
}).then(function (data) {
  data.jokesArray.forEach(function (joke, i) {
    setTimeout(function () {
      document.getElementById("root").innerHTML = "<div class=\"createdDiv\">".concat(joke, "</div>");
    }, i * 10000);
  });
});