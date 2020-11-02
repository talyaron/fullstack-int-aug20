"use strict";

for (var i = 0; i < 9; i++) {
  console.log(i);
}

var numbers = [20, 25, 10, 4, 35, 153, 65];
numbers.forEach(function (el) {
  console.log(el);
});
numbers.map(function (elm, index) {
  console.log(index, ':', elm);
});