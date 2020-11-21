"use strict";

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;

  if (searchTerm.length > 0) {
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
    html += "<div class=\"productList\"><img src=".concat(product.image, "><p class=\"productList__p\">Product name: <b>").concat(product.name, "</b>, Product Model: <b>").concat(product.model, "</b>, Price: <b>").concat(product.price, " </b></p></div>");
  });
  root.innerHTML = html;
}