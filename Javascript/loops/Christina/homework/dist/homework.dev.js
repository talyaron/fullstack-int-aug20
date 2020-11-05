"use strict";

var theWeekend = {
  name: "The weekend",
  age: 30,
  imgSrc: '<img src="homework/the-weekend.jpg">'
};
var justin = {
  name: "Justin Bieber",
  age: 26,
  imgSrc: '<img src="homework/justin.jpg">'
};
var lana = {
  name: "Lana del ray",
  age: 35,
  imgSrc: '<img src="homework/Lana-Del-Rey.jpg">'
};
var britney = {
  name: "britney spears",
  age: 38,
  imgSrc: '<img src="homework/britneyspears.jpg">'
};
var artists = [theWeekend, justin, lana, britney];
var root = document.getElementById('root');
console.log(artists);

for (var _i = 0, _artists = artists; _i < _artists.length; _i++) {
  var artist = _artists[_i];

  if (artist.age >= 30) {
    root.innerHTML += "<p>The name of the artists: ".concat(artist.name, "</p>");
    root.innerHTML += "<p>age: ".concat(artist.age, "</p>");
    root.innerHTML += artist.imgSrc;
  }
}