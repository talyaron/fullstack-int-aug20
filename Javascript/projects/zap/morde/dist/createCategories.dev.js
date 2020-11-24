"use strict";

function createCategories() {
  var categoriesArray = [];
  products.forEach(function (product) {
    categoriesArray.push(product.category);
    removeDuplicates(categoriesArray);
  });
}

function removeDuplicates(arr) {
  var filteredCategoriesArray = [];
  arr.forEach(function (category) {
    if (!filteredCategoriesArray.includes(category)) {
      filteredCategoriesArray.push(category);
      filteredCategoriesArray.sort(function (a, b) {
        if (a < b) return -1;
      });
    }
  });
  renderCategories(filteredCategoriesArray);
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function renderCategories(arr) {
  var createdCategories = document.getElementById("createdCategories");
  var html = "";
  arr.forEach(function (category) {
    html += "\n        <div class=\"categoryTitle\" onclick=handleClickedCategory(event)>\n        ".concat(category.capitalize(), "\n        <div><img class=\"categoryPic\" src=\"img/").concat(category, ".jpg\" alt=\"\"></div>\n        </div>");
  });
  createdCategories.innerHTML = html;
}

function handleClickedCategory(e) {
  if (e.target.innerText.length >= 1) {
    var clickedCategory = e.target.innerText;
    var createdCategories = document.getElementById("createdCategories");
    createdCategories.setAttribute("style", "display:none");
    createCategoryInfo(clickedCategory);
  }
}

function createCategoryInfo(category) {
  var categoryArray = [];
  var regSearch = new RegExp(category.toLowerCase(), 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.category)) {
      categoryArray.push(product);
      renderCategoryInfo(categoryArray);
    }
  });
}

function renderCategoryInfo(categoryArray) {
  var createdCategoryPage = document.getElementById('createdCategoryPage');
  var html = "<div class=\"buttonsClass\">\n    <button class=\"btnClass\" onclick=\"handleSortProducts(event)\">Sort By Price</button>\n    <button class=\"btnClass\" onclick=\"handleFilterProducts(event)\">Filter By Recommendation</button>\n    </div>";
  categoryArray.forEach(function (product) {
    html += "\n        <img class=\"productPic\" src=\"".concat(product.image, "\" alt=\"\">\n        <div class=\"clickableName\" onclick=handleClickedName(event) >").concat(product.name, "</div>\n        <div>").concat(product.brand, "</div>\n        <div><p>In Store Since:</p>").concat(product.inStoreSince, "</div>\n        <div><p>Price:</p>").concat(product.price, "\u20AA</div>\n        <div><p>Recommendation:</p>").concat(product.recommendations, "/100</div>\n        <div style=\"display:none;\">").concat(product.category, "</div>\n        <hr>\n        ");
  });
  createdCategoryPage.innerHTML = html;
}

function handleClickedName(e) {
  var createdCategoryPage = document.getElementById('createdCategoryPage');
  var sortedProducts = document.getElementById('sortedProducts');
  var filteredProducts = document.getElementById('filteredProducts');
  sortedProducts.setAttribute("style", "display:none");
  filteredProducts.setAttribute("style", "display:none");
  createdCategoryPage.setAttribute("style", "display:none");
  var pickedProductName = e.target.innerText;
  createProductInfoFromCategory(pickedProductName);
}

function createProductInfoFromCategory(productName) {
  var regSearch = new RegExp(productName, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name)) {
      renderProductInfoFromCategory(product);
    }
  });
}

function renderProductInfoFromCategory(product) {
  var createdProductPage = document.getElementById('createdProductPage');
  createdProductPage.innerHTML = "";
  createdProductPage.innerHTML += "\n    <img class=\"productPic\" src=\"".concat(product.image, "\" alt=\"\">\n    <div><h1>").concat(product.name, "</h1></div>\n    <div>").concat(product.brand, "</div>\n    <div>").concat(product.category, "</div>\n    <div><p>Description:</p>").concat(product.description, "</div>\n    <div><p>In Store Since:</p>").concat(product.inStoreSince, "</div>\n    <div><p>Model:</p>").concat(product.model, "</div>\n    <div><p>Price:</p>").concat(product.price, "</div>\n    <div><p>Recommendations:</p>").concat(product.recommendations, "/100</div>\n    ");
}