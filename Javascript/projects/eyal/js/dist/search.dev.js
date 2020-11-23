"use strict";

function handleSearch(e) {
  e.preventDefault();
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

function renderSearchResults(results) {
  var root = document.getElementById('root');
  var html = '';
  results.forEach(function (product) {
    console.log('results');
    html += "<p>Product name: ".concat(product.name, ", Product Model: ").concat(product.model, ", Price: ").concat(product.price, "</p>");
  });
  root.style = "display:block";
  root.innerHTML = html;
}