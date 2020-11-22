"use strict";

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;
  console.log(searchTerm);

  if (searchTerm.length >= 2) {
    var results = searchProducts(searchTerm);
    renderSearchResults(results);
    /*console.log(results)*/
  }
}

function searchProducts(searchTerm) {
  var results = [];
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

var root = document.getElementById('root');

function renderSearchResults(results) {
  var html = '';
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  root.innerHTML = html;
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