"use strict";

function getAge(year) {
  var x = new Date();
  var y = x.getFullYear();
  return y - year;
}