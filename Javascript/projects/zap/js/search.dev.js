"use strict";

var results = [];

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;
  console.log(searchTerm);

  if (searchTerm.length >= 2) {
    var _results = searchProducts(searchTerm);

    renderSearchResults(_results);
    /*console.log(results)*/
  }
}

function searchProducts(searchTerm) {
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      /*console.log(product)*/
      results.push(product);
    }
  });
  /*console.log(results)*/

  return results;
}

debugger;
var root = document.getElementById('root');

function renderSearchResults(results) {
  var html = '';
  var btnsSortFilter = '';
  btnsSortFilter += "<span>Sort by:<button id=\"btnSortPrice\" onclick=\"SortPrice()\" type=\"submit\"> price</button>\n    <button onclick=\"SortRating()\" id=\"btnSortc\" type=\"submit\">rating</button></span>";
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  root.innerHTML = "<div>".concat(btnsSortFilter, "</div>  <div>").concat(html, "</div>");
}

function SortPrice() {
  var html = '';
  results.sort(function (a, b) {
    if (a.price < b.price) return -1;
  });
  console.log(results);
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  renderSearchResults(results);
}

function SortRating() {
  var html = '';
  results.sort(function (a, b) {
    if (a.recommendations < b.recommendations) return -1;
  });
  console.log(results);
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  renderSearchResults(results);
}

function handleClick(e) {
  products.forEach(function (elm) {
    if (e.target.id !== elm.isdn) {
      console.log('false');
    } else {
      var container = '';
      container += "<h3>".concat(elm.name, "</h3>") + "<img src=\"".concat(elm.image, "\">") + "<div>Price: ".concat(elm.price, "</br>Model: ").concat(elm.model, "</br>Brand: ").concat(elm.brand, "</br>Recommendations: ").concat(elm.recommendations, "</br>Description: ").concat(elm.description, "</br>Store:").concat(elm.store, "</div>");
      root.innerHTML = container;
    }
  });
}