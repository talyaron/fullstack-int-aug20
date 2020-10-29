"use strict";

function age(correntYear, BerthOfYear) {
  return correntYear - BerthOfYear;
}

var correntYear = prompt("Please enter The Corrent Year ", "1");
var BerthOfYear = prompt("Please enter your Year of Berth ", "2");
console.log(age(correntYear, BerthOfYear));