"use strict";

var results = [];

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;
  console.log(searchTerm);

  if (searchTerm.length >= 2) {
    results = searchProducts(searchTerm);
    renderSearchResults(results);
    /*console.log(results)*/
  }
}

function searchProducts(searchTerm) {
  results = [];
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      /*console.log(product)*/
      results.push(product);
    }
  });
  return results;
}

var html = '';
var root = document.getElementById('root');
var filterBy = document.getElementById('filterBy');
var containerFilter = '';
var btnsSort = '';
var filterResModel = '';
var filterResBrand = '';

function renderSearchResults(results) {
  filterResModel = '';
  filterResBrand = '';
  btnsSort = '';
  html = '';
  containerFilter = '';
  containerFilter = "<div>Filter by model <div id=\"filterByModel\"></div></div>\n  <div>Filter by brand <div id=\"filterByBrand\"></div></div>";
  filterBy.innerHTML = containerFilter;
  var filterByModel = document.getElementById('filterByModel');
  var filterByBrand = document.getElementById('filterByBrand');
  btnsSort += "<span>Sort by:<button id=\"btnSortPrice\" onclick='sortPrice(event)' type=\"submit\"> price</button>\n    <button id=\"btnSortRating\" type=\"submit\" onclick='sortRating(event)'>rating</button></span>";
  results.forEach(function (product) {
    filterResModel += " <div><li id=\"btnResModel\" style=\"min-width:25px; min-height:25px\" onclick='filterModel(event)'>".concat(product.model, "</li>\n        </div>");
    filterResBrand += " <div><li id=\"btnResBrand\" style=\"min-width: 25px; min-height: 25px\"  onclick='filterBrand(event)'>".concat(product.brand, "</li></div>");
  });
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  filterByModel.innerHTML = filterResModel;
  filterByBrand.innerHTML = filterResBrand;
  root.innerHTML = btnsSort + html;
}

function handleClick(e) {
  filterResModel = '';
  filterResBrand = '';
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