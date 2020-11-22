"use strict";

// מערך אוטומטי שנוצר + קטגוריה
var ProductsFiltered = []; // דוחף נתונים למערך ללא כפולים

products.forEach(function (product) {
  if (ProductsFiltered.indexOf(product.category) == -1) {
    ProductsFiltered.push(product.category);
  }
}); // חיפוש + קריאה לפונקציות התוצאה

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;

  if (searchTerm.length > 2) {
    var results = searchProducts(searchTerm);
    renderSearchResults(results);
  }
} // תנאי החיפוש


function searchProducts(searchTerm) {
  var results = [];
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      results.push(product);
      hil();
    }
  });
  return results;
} // מעביר תוצאות ל html


function renderSearchResults(results) {
  var root = document.getElementById('root');
  var html = '';
  results.forEach(function (product) {
    html += "<a href=\"".concat(product.Link, "\"><div class=\"card\"><p>Product name:").concat(product.name, "</br> Product Model: ").concat(product.model, "</br> Price: ").concat(product.price, "</p></div></a>");
  });
  root.innerHTML = html;
} // הצגת קטוגוריות


var textCategory = "";

function showCategory(event) {
  for (i = 0; i < ProductsFiltered.length; i++) {
    textCategory += "<div class=\"category\"value=\"".concat(ProductsFiltered[i], "\" onclick=\"openCtegory(event)\">").concat(ProductsFiltered[i], "</div>");
    document.querySelector("#category").innerHTML = textCategory;
  }
}

function openCtegory(event) {
  var prodctfilter = event.target.innerText;
  console.log(prodctfilter);
  console.log(event);
  products.forEach(function (event) {
    console.log(event.category); // html+= `<div onclick="${}"></div>`
  });
} // console.log(products.name)


var core = document.querySelector(".core");
var button = document.querySelector("#button");
var cotert = document.querySelector(".cotert");
var root = document.querySelector("#root");
var div = document.querySelector(".div");

function hil() {
  core.style.display = "block";
  cotert.style.borderRadius = "10px 10px 0px 0px";
  root.style.border = '15px solid rgba(105, 105, 105, 0.102)';
}

var roothtml = "";

function hiderezolt(event) {
  var input = event.target.value;

  if (input.length < 1) {
    root.innerHTML = roothtml;
    core.style.display = "none";
    cotert.style.borderRadius = "10px 10px 0px 0px";
    root.style.border = '0px solid  rgba(255, 255, 255, 0)';
  }
}