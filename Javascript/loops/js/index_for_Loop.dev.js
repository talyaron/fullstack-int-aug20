"use strict";

debugger;
var movies = []; // const textBo1 = document.getElementById(textbox);

var DOM1 = document.getElementById("uotput");
var textBox1 = document.getElementById("textbox");

function GetMovies() {
  movies.push(textBox1.value); // console.log(textBox1.value);
}

function pintAllMovise() {
  movies.forEach(function (element) {
    DOM1.innerHTML += "<p> ".concat(element, " <p>");
  });
}