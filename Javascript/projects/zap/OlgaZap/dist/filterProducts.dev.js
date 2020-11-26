"use strict";

var btnResModel = document.getElementById('btnResModel');
var btnResBrand = document.getElementById('btnResBrand');

function filterModel(e) {
  console.log('btnResModel');
  html = '';
  filterResModel = '';
  filterResBrand = '';
  results.filter(function (result) {
    if (e.target.textContent == result.model) {
      console.log(result);
      html += "<p id=\"".concat(result.isdn, "\" onclick=handleClick(event)>Product name: ").concat(result.name, " </br> Product Model: ").concat(result.model, " </br> Price: ").concat(result.price, "</p>");
    }
  });
  root.innerHTML = html;
}

function filterBrand(e) {
  console.log(e.target);
  html = '';
  filterResModel = '';
  filterResBrand = '';
  results.filter(function (result) {
    if (e.target.textContent == result.brand) {
      console.log(result);
      html += "<p id=\"".concat(result.isdn, "\" onclick=handleClick(event)>Product name: ").concat(result.name, " </br> Product Model: ").concat(result.model, " </br> Price: ").concat(result.price, "</p>");
    }
  });
  root.innerHTML = html;
}