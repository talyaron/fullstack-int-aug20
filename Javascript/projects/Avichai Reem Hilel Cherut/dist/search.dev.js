"use strict";

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;

  if (searchTerm.length > 2) {
    var _results = searchProducts(searchTerm);

    renderSearchResults(_results);
  }
}

var results = [];

function searchProducts(searchTerm) {
  results = [];
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      results.push(product);
    }
  });
  return results;
}

function renderSearchResults(results) {
  var root = document.getElementById('root');
  var html = '';
  results.forEach(function (product) {
    html += "<p>Product name: ".concat(product.name, ", Product Model: ").concat(product.model, ", Price: ").concat(product.price, "</p>");
  });
  root.innerHTML = html;
}