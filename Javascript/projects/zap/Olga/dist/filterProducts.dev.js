"use strict";

var btnResModel = document.getElementById('btnResModel');
var btnResBrand = document.getElementById('btnResBrand');

function filterModel(e) {
  console.log('filterModel');
  html = '';
  filterResModel = '';
  filterResBrand = '';
  results.filter(function (product) {
    if (e.target.textContent == product.model) {
      console.log(product);
      html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
    }
  });
  root.innerHTML = html;
}

function filterBrand(e) {
  console.log('filterBrand');
  html = '';
  filterResModel = '';
  filterResBrand = '';
  results.filter(function (product) {
    if (e.target.textContent == product.brand) {
      console.log(product);
      html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
    }
  });
  root.innerHTML = html;
}