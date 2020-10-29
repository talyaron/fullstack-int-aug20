"use strict";

function CalculateAge(BirthYear, CurrentYear) {
  return CurrentYear - BirthYear;
} // let MyAge = CalculateAge(1998,2020);
// console.log(MyAge);


function namesToObj(firstName, surname) {
  var obj = {
    firstName: firstName,
    surname: surname
  };
  return obj;
}

namesToObj('cherut', 'gur');
var x = namesToObj('cherut', 'gur');
console.log(x);