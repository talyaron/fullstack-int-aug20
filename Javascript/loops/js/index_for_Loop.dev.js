"use strict";

/* function countNums(countUntil){
    for (let i=1; i<countUntil;i++){
        console.log(i);
    }
} 

countNums(1000);*/
debugger;
var movies = [];
var textBo1 = document.getElementById(textbox);
var DOM1 = document.getElementById(uotput);

function GetMovies() {
  movies.push(textBo1.innerText);
}

function pintAllMovise(movies) {
  movies.forEach(function (element) {
    DOM1.innerText = "<p> ".concat(element, " <p>");
  });
}