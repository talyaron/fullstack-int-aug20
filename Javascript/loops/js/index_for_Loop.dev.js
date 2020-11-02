"use strict";

/* function countNums(countUntil){
    for (let i=1; i<countUntil;i++){
        console.log(i);
    }
} 

countNums(1000);*/
debugger;
var movies = [];

function Loopmovies() {
  for (var i = 1; i < 4; i++) {
    var movie = prompt("enter movie");
    movies.push(movie);
    movies.forEach(function (element) {
      console.log(element);
    });
  }
}

Loopmovies();