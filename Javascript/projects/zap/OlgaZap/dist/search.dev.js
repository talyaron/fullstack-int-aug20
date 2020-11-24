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
  var btnsSortFilter = '';
  btnsSortFilter += "<span>Sort by:<button onclick=SortPrice() id=\"btnSortPrice\" type=\"submit\"> price</button>\n    <button id=\"btnSortRating\" onclick=SortRating() type=\"submit\">rating</button></span>";
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  root.innerHTML = btnsSortFilter + html;
  var btnSortPrice = document.getElementById('btnSortPrice');
  var btnSortRating = document.getElementById('btnSortRating');
  btnSortPrice.addEventListener('click', function (event1) {
    html = '';
    results.sort(function (a, b) {
      if (a.price < b.price) return -1;
    });
    console.log(results);
    results.forEach(function (product) {
      html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
    });
    root.innerHTML = btnsSortFilter + html;
  });
  btnSortRating.addEventListener('click', function (event2) {
    console.log('click');
    html = '';
    results.sort(function (a, b) {
      if (a.recommendations < b.recommendations) return -1;
    });
    console.log(results);
    results.forEach(function (product) {
      html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
    });
    root.innerHTML = btnsSortFilter + html;
  });
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