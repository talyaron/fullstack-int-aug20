"use strict";

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;
  console.log(searchTerm);

  if (searchTerm.length > 2) {
    var _results = searchProducts(searchTerm);

    renderSearchResults(_results);
  }
}

var results = [];

function searchProducts(searchTerm) {
  results = [];
  var regSearch = new RegExp(searchTerm, 'gi');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      results.push(product);
    }
  });
  return results;
}

function renderSearchResults(results) {
  var products = document.querySelector("#products");
  var html = '';
  var index = -1;
  results.forEach(function (product) {
    html += "<p data-td=\"".concat(index += 1, "\" onclick=\"handleShowProduct(event)\">Product name: ").concat(product.name, ", \n        Product Model: ").concat(product.model, ", Product Price: ").concat(product.price, "<img src=\"").concat(product.image, "\">");
  });
  products.innerHTML = html;
}