"use strict";

function getAge(year) {
  var y = new Date().getFullYear();
  return y - year;
}

console.log(getAge(1991));