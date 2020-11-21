"use strict";

function handleSearch(e) {
  e.preventDefault();

  if (e.isTrusted == true) {
    var searchResults = document.getElementById("searchResults");
    searchResults.setAttribute("style", "display:inherit");
  }

  var searchTerm = e.target.children.search.value;

  if (searchTerm.length > 2) {
    var results = searchProducts(searchTerm);
    renderSearchResults(results);
  }
}

function searchProducts(searchTerm) {
  var results = [];
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      results.push(product);
    }
  });
  return results;
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function renderSearchResults(results) {
  var searchResults = document.getElementById('searchResults');
  var html = '';
  results.forEach(function (product) {
    html += "<p class=\"productFound\" onclick=handleClickedProduct(event)>".concat(product.name, " , ").concat(product.category.capitalize(), " , Price: ").concat(product.price, "</p>\n        ");
  });
  searchResults.innerHTML = html;
}

function handleClickedProduct(e) {
  var productName = e.target.innerHTML.split(" ,")[0];
  var searchResults = document.getElementById('searchResults');
  var productInfo = document.getElementById('createdCategories');
  var createdCategoryPage = document.getElementById("createdCategoryPage");
  var createdProductPage = document.getElementById("createdProductPage");
  var sortedProducts = document.getElementById("sortedProducts");
  var filteredProducts = document.getElementById("filteredProducts");
  filteredProducts.setAttribute("style", "display:none");
  sortedProducts.setAttribute("style", "display:none");
  createdProductPage.setAttribute("style", "display:none");
  createdCategoryPage.setAttribute("style", "display:none");
  searchResults.setAttribute("style", "display:none");
  productInfo.setAttribute("style", "display:inherit");
  createProductInfo(productName);
}

function createProductInfo(productName) {
  var regSearch = new RegExp(productName, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name)) {
      renderProductInfo(product);
    }
  });
}

function renderProductInfo(product) {
  var productInfo = document.getElementById('createdCategories');
  productInfo.innerHTML = "";
  productInfo.innerHTML += "\n    <img class=\"productPic\" src=\"".concat(product.image, "\" alt=\"\">\n    <div><h1>").concat(product.name, "</h1></div>\n    <div>").concat(product.brand, "</div>\n    <div>").concat(product.category, "</div>\n    <div><p>Description:</p>").concat(product.description, "</div>\n    <div><p>In Store Since:</p></h2>").concat(product.inStoreSince, "</div>\n    <div><p>Model:</p>").concat(product.model, "</div>\n    <div><p>Price:</p>").concat(product.price, "</div>\n    <div><p>Recommendations:</p>").concat(product.recommendations, "/100</div>\n    ");
}