"use strict";

function age(correntYear, BerthOfYear) {
  return correntYear - BerthOfYear;
}

var correntYear = prompt("Please enter The Corrent Year ", "2020");
var BerthOfYear = prompt("Please enter your Year of Berth ", "1997");
prompt("your Year of Berth is:", age(correntYear, BerthOfYear));
console.log(age(correntYear, BerthOfYear));