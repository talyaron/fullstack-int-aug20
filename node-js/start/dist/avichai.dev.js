"use strict";

var yearNow = new Date().getFullYear();

whatIsAge = function whatIsAge(yearNow, bornYear) {
  return yearNow - bornYear;
};

var myAge = whatIsAge(yearNow, 2000);
console.log(myAge);