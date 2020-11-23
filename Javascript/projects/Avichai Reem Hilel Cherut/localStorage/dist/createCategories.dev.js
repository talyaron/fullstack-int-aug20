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
categoryBox.innerHTML += html; // localStorage.setItem("filter", JSON.stringify(filter));
// console.log(localStorage)

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
  console.log(chosenCategory); // location.replace("categories.html")
  // filterButtons.innerHTML = '';

  root.innerHTML = "";
  var stam = [];
  products.forEach(function (product) {
    if (chosenCategory == product.category) {
      console.log(product.category);
      currentCategory.push(product); // root.innerHTML += `<a href="https://www.noknok.co.il/items/3046324"><p>Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}<img src="${product.image}"></p><a>`

      if (stam.indexOf(product.brand) == -1) {
        stam.push(product.brand);
        console.log(stam); // filterButtons.innerHTML += `<button id='${product.brand}'>${product.brand}</button>`;
      }
    }
  });
  var afterFilter = []; // filterButtons.addEventListener('click', e => {
  //     let chosenFilter = (e.composedPath()[0].id)
  //     console.log(e.composedPath()[0].id)
  //     root.innerHTML =''
  //     currentCategory.forEach(product =>{
  //         if(chosenFilter == product.brand){ 
  //             root.innerHTML += `<p class="product">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}<img src="${product.image}"></p>`
  //         }
  //     })
  //   });
}