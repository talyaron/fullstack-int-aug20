"use strict";

var categoryBox = document.querySelector("#categoryBox");
var filter = [];
products.forEach(function (product) {
  if (filter.indexOf(product.category) == -1) {
    filter.push(product.category);
  }
});
var html = "";
filter.sort();

for (i = 0; i < filter.length; i++) {
  html += "<option class=\"category\" data-id=\"".concat(filter[i], "\">").concat(filter[i], "</option>");
}

categoryBox.innerHTML = html;
var category = document.querySelectorAll('.category');
var root = document.getElementById('root');
var html1 = "";
var productName = "";
var filterButtons = document.querySelector("#filterButtons");
var currentCategory = [];

function handleClick(e) {
  productName = e.target.value;
  filterButtons.innerHTML = '';
  root.innerHTML = "";
  var stam = [];
  products.forEach(function (product) {
    if (productName == product.category) {
      console.log(product.category);
      currentCategory.push(product);
      root.innerHTML += "<p>Product Category: ".concat(product.category, ", Product Model: ").concat(product.model, ", Price: ").concat(product.price, ", Recommendations: ").concat(product.recommendations, "</p>"); // filterButtons.innerHTML = '';

      if (stam.indexOf(product.brand) == -1) {
        stam.push(product.brand);
        console.log(stam);
        filterButtons.innerHTML += "<button id='".concat(product.brand, "'>").concat(product.brand, "</button>");
      }
    }
  });
}