"use strict";

var btnSortPrice = document.getElementById('btnSortPrice');
var btnSortRating = document.getElementById('btnSortRating');

function sortPrice() {
  console.log('btnSortPrice');
  html = '';
  filterResModel = '';
  filterResBrand = '';
  results.sort(function (a, b) {
    if (a.price < b.price) return -1;
  });
  console.log(results);
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  renderSearchResults(results);
}

function sortRating() {
  console.log('btnSortRating');
  html = '';
  filterResModel = '';
  filterResBrand = '';
  results.sort(function (a, b) {
    if (a.recommendations < b.recommendations) return -1;
  });
  console.log(results);
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  renderSearchResults(results);
}