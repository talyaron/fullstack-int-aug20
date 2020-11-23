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

console.log(html);
categoryBox.innerHTML += html;
var category = document.querySelectorAll('.category');
var root = document.getElementById('root');
var html1 = "";
var productName = "";
var filterButtons = document.querySelector("#filterButtons");
var currentCategory = [];

function handleClickCategories(e) {
  e.preventDefault();

  if (chosenCategory != "default") {
    window.location.href = "categories.html";
  }
}

function handleClick(e) {
  chosenCategory = e.target.value;
  localStorage.setItem("chosenCategory", chosenCategory);
  console.log(localStorage);
  console.log(chosenCategory);
  root.innerHTML = "";
  var stam = [];
  products.forEach(function (product) {
    if (chosenCategory == product.category) {
      console.log(product.category);
      currentCategory.push(product);

      if (stam.indexOf(product.brand) == -1) {
        stam.push(product.brand);
        console.log(stam);
      }
    }
  });
  var afterFilter = [];
}