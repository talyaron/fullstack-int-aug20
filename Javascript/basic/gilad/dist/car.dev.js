"use strict";

/* cannot make 2 variables with the same name

let brand = "skoda";
let model = "fabia";
let price = 40000;
let year = 2012;
let gear = manual;
*/
var car = {
  brand: "skoda",
  model: "fabia",
  price: 40000,
  year: 2012,
  gear: "manual"
};
var car2 = car;
var carArr = new Array();
carArr[0] = car;
console.log(carArr); // car ={brand:"audi", model:"a5",price:180000,year:2020,gear:"automatic"}

car.brand = "audi";
carArr[1] = car;
console.log(carArr);
carArr[2] = car2;
console.log(carArr);
/* the 1st object is not overwritten. my guess is that because both objects are stored in an array
that allocate the memory to each slot individualy and therfore saves the 1st car variables.*/