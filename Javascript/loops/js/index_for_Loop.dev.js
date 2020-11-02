"use strict";

/* function countNums(countUntil){
    for (let i=1; i<countUntil;i++){
        console.log(i);
    }
} 

countNums(1000);*/
debugger;
var movies = [];

function Loopmovies(movie) {
  for (var i = 1; i < 4; i++) {
    prompt("enter movie", movie);
    movies.push(movie);
    movies.forEach(function (element) {
      console.log(element);
    });
  }
}

Loopmovies();