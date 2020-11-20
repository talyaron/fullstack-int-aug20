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
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      results.push(product);
      hil();
    }
  });
  return results;
}

function renderSearchResults(results) {
  var root = document.getElementById('root');
  var html = '';
  results.forEach(function (product) {
    html += "<a href=\"".concat(product.Link, "\"><div class=\"card\"><p>Product name:").concat(product.name, "</br> Product Model: ").concat(product.model, "</br> Price: ").concat(product.price, "</p></div></a>");
  });
  root.innerHTML = html;
}

var core = document.querySelector(".core");
var button = document.querySelector("#button");
var cotert = document.querySelector(".cotert");
var root = document.querySelector("#root");

function hil() {
  core.style.display = "block";
  cotert.style.borderRadius = "10px 10px 0 0";
  root.style.border = '5px solid rgb(105, 105, 105)';
}

var roothtml = "";

function hiderezolt(event) {
  var input = event.target.value;
  console.log(event);

  if (input.length < 1 || input.length > 5) {
    root.innerHTML = roothtml;
  } else {
    console.log('hillel');
  } // root.innerHTML = roothtml

}