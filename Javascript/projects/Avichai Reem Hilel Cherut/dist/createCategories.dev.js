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
  products.forEach(function (product) {
    if (productName == product.category) {
      console.log(product.category);
      currentCategory.push(product);
      root.innerHTML += "<p>Product Category: ".concat(product.category, ", Product Model: ").concat(product.model, ", Price: ").concat(product.price, ", Recommendations: ").concat(product.recommendations, "</p>"); // filterButtons.innerHTML = '';

      filterButtons.innerHTML += "<button id='".concat(product.brand, "'>").concat(product.brand, "</button>");
    }
  });
  var afterFilter = [];
  filterButtons.addEventListener('click', function (e) {
    var chosenFilter = e.composedPath()[0].id;
    currentCategory.forEach(function (product) {
      if (chosenFilter == product.brand) {
        // console.log (product.category)
        // currentCategory.pop(product);
        // afterFilter.push(product);
        // if(afterFilter.indexOf(product.brand) == -1){
        // }
        root.innerHTML = '';
        root.innerHTML += "<p>Product brand: ".concat(product.brand, ", Product Model: ").concat(product.model, ", Price: ").concat(product.price, ", Recommendations: ").concat(product.recommendations, "</p>"); // filterButtons.innerHTML += `<button >${product.brand}</button>`;
      }
    });
  }); // for (i = 0; i < products.length; i++) {
  //     if (productName == products[i].category) {
  //         root.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
  //     }
  // }
} // function handlePrice(e) {
//     products.sort((a, b) => a.price - b.price)
//     root.innerHTML = ""
//     for (i = 0; i < products.length; i++) {
//         if (productName == products[i].category) {
//             root.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
//         }
//     }
// }
// function handleRecommend(e) {
//     products.sort((a, b) => a.recommendations - b.recommendations)
//     root.innerHTML = ""
//     for (i = 0; i < products.length; i++) {
//         if (productName == products[i].category) {
//             root.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
//         }
//     }
// }
// filter.forEach(product => {
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