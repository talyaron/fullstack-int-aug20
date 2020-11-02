"use strict";

for (var _i = 0; _i < 9; _i++) {
  console.log(_i);
}

var i = 0;
console.log('while');

while (i < 1001) {
  console.log(i);
  i++;
}

var cars = ["tesla", "bmw", "volvo", "citroen", "subaro", "toyota", "Renault"];
cars.forEach(function (el) {
  console.log(el);
});
cars.map(function (elm, index) {
  console.log(index, ':', elm);
});