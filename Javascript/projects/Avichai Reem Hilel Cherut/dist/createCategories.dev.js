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
var test = document.querySelector("#test");
var html1 = "";
var productName = "";

function handleClick(e) {
  productName = e.target.value;
  test.innerHTML = "";

  for (i = 0; i < products.length; i++) {
    if (productName == products[i].category) {
      test.innerHTML += "<p>Product name: ".concat(products[i].category, ", Product Model: ").concat(products[i].model, ", Price: ").concat(products[i].price, "</p>");
    }
  }
}

function handlePrice(e) {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  test.innerHTML = "";

  for (i = 0; i < products.length; i++) {
    if (productName == products[i].category) {
      test.innerHTML += "<p>Product name: ".concat(products[i].category, ", Product Model: ").concat(products[i].model, ", Price: ").concat(products[i].price, "</p>");
    }
  }
}

function handleRecommend(e) {
  products.sort(function (a, b) {
    return a.recommendations - b.recommendations;
  });
  test.innerHTML = "";

  for (i = 0; i < products.length; i++) {
    if (productName == products[i].category) {
      test.innerHTML += "<p>Product name: ".concat(products[i].category, ", Product Model: ").concat(products[i].model, ", Price: ").concat(products[i].price, "</p>");
    }
  }
} // filter.forEach(product => {
//     if (filter.indexOf(product.category) == -1) {
//         filter.push(product.category)
//     }
// })
// let filterModel = []
// products.forEach(product => {
//     if (filterModel.indexOf(product.model) == -1) {
//         filterModel.push(product.model)
//     }
// })
// console.log(filterModel)