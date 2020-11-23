"use strict";

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;
  console.log(searchTerm);

  if (searchTerm.length > 2) {
    var results = searchProducts(searchTerm);
    renderSearchResults(results);
  }
}

function searchProducts(searchTerm) {
  var results = [];
  var regSearch = new RegExp(searchTerm, 'gi');
  products.forEach(function (products) {});
}