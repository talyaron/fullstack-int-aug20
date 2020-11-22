"use strict";

function handleSearch(e) {
  var searchTerm = e.target.children.search.value;

  if (searchTerm.length > 2) {
    searchProducts(searchTerm);
  }
}

function searchProducts(searchTerm) {
  var results = [];
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {});
}