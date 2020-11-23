"use strict";

// מערך אוטומטי שנוצר + קטגוריה
var ProductsFiltered = []; // דוחף נתונים למערך ללא כפולים

products.forEach(function (product) {
  if (ProductsFiltered.indexOf(product.category) == -1) {
    ProductsFiltered.push(product.category);
  }
}); // חיפוש + קריאה לפונקציות התוצאה

handleSearch = function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;

  if (searchTerm.length > 2) {
    var results = searchProducts(searchTerm);
    renderSearchResults(results);
  }
}; // תנאי החיפוש


searchProducts = function searchProducts(searchTerm) {
  var results = [];
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      results.push(product);
      hil();
    }
  });
  return results;
}; // מעביר תוצאות ל html


renderSearchResults = function renderSearchResults(results) {
  var root = document.getElementById('root');
  var html = '';
  results.forEach(function (product) {
    html += "<a href=\"".concat(product.Link, "\"><div class=\"card\"><p>Product name:").concat(product.name, "</br> Product Model: ").concat(product.model, "</br> Price: ").concat(product.price, "</p></div></a>");
  });
  root.innerHTML = html;
}; // הצגת קטוגוריות


var textCategory = "";

showCategory = function showCategory(event) {
  for (i = 0; i < ProductsFiltered.length; i++) {
    textCategory += "<div class=\"category\"value=\"".concat(ProductsFiltered[i], "\" onclick=\"openCtegory(event)\" >").concat(ProductsFiltered[i], "</div>");
    document.querySelector("#category").innerHTML = textCategory;
  }
};

var core = document.querySelector(".core");
var button = document.querySelector("#button");
var cotert = document.querySelector(".cotert");
var root = document.querySelector("#root");
var div = document.querySelector(".div");

hil = function hil() {
  core.style.display = "block";
  cotert.style.borderRadius = "10px 10px 0px 0px";
  root.style.border = '15px solid rgba(105, 105, 105, 0.102)';
};

var roothtml = "";

hideresults = function hideresults(event) {
  var input = event.target.value;

  if (input.length < 1) {
    root.innerHTML = roothtml;
    core.style.display = "none";
    cotert.style.borderRadius = "10px 10px 0px 0px";
    root.style.border = '0px solid  rgba(255, 255, 255, 0)';
  }
}; // נסיון מוצלח


openCtegory = function openCtegory(e) {
  var results = [];
  var prodctfilter = e.target.innerText;
  var regSearch = new RegExp(prodctfilter, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.category)) {
      results.push(product);
    }
  });
  console.log(prodctfilter);
  var showprodctfilter = "";

  for (i = 0; i < results.length; i++) {
    showprodctfilter += "<div class=\"showprodctfilter\">".concat(results[i].name, " from ").concat(results[i].brand, " price -").concat(results[i].price, "</div>");
    document.querySelector("#showprodctfilter").innerHTML = showprodctfilter;
  }

  scroll(0, 5000); // מתגים לשינוי מחיר

  var pris = document.querySelector(".pris");
  var divcolor = document.querySelector(".divcolor");

  if (divcolor.style.marginLeft == '0px') {
    divcolor.style.marginLeft = "22px";
  } else {
    pris.style.backgroundColor = "rgb(180, 180, 180)";
    divcolor.style.marginLeft = "0px";
  }

  pris.addEventListener("click", function (event) {
    if (divcolor.style.marginLeft == '0px') {
      pris.style.backgroundColor = "rgb(0, 90, 173)";
      divcolor.style.marginLeft = "23px";
      results = results.sort(function (a, b) {
        return a.price - b.price;
      });
      console.log(results);
    } else {
      pris.style.backgroundColor = "rgb(180, 180, 180)";
      divcolor.style.marginLeft = "0px";
    }
  });
};