"use strict";

// debugger;
var movies = [];
var textBo1 = document.getElementById(textbox);
var DOM1 = document.getElementById(uotput);

function GetMovies() {
  movies.push(textBo1.innerText);
}

;

function pintAllMovise() {
  movies.forEach(function (element) {
    DOM1.innerText += "<p> ".concat(element, " <p>");
  });
}

;