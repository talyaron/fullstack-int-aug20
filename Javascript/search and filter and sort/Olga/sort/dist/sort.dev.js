"use strict";

var products = [{
  name: 'cake',
  price: 20
}, {
  name: 'cupcake',
  price: 15
}, {
  name: 'sweet',
  price: 18
}, {
  name: 'doughnut',
  price: 22
}, {
  name: 'icecream',
  price: 16
}];
products.sort(function (a, b) {
  return a.price - b.price;
});
console.log(products);
var newProducts = products.filter(function (products) {
  return products.price < 20;
});
console.log(newProducts);