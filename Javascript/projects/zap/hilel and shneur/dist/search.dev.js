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
  console.log(results);
  return results;
}; // מעביר תוצאות ל html


renderSearchResults = function renderSearchResults(results) {
  var root = document.getElementById('root');
  var html = '';
  results.forEach(function (product) {
    html += "<div class=\"card1\"><p>Product name:".concat(product.name, "</br> Product Model: ").concat(product.model, "</br> Price: ").concat(product.price, "</p></div>  <div id=\"showprodctfilter\"></div>");
    html += "<div id=\"category\"></div>";
  });
  root.innerHTML = html;
}; // הצגת קטוגוריות


showCategory = function showCategory(event) {
  var textCategory = "";

  for (i = 0; i < ProductsFiltered.length; i++) {
    textCategory += "<div class=\"category\"value=\"".concat(ProductsFiltered[i], "\" onclick=\"openCtegory(event)\" ><p>").concat(ProductsFiltered[i], "</p></div>");
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
    showprodctfilter += "<div class=\"showprodctfilter\" onclick=\"displayProductsFun(event)\">".concat(results[i].name, "</div>"); // from ${results[i].brand} price ${results[i].price}

    document.querySelector("#showprodctfilter").innerHTML = showprodctfilter;
  }

  scroll(0, 1000); // מתגים לשינוי מחיר

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
      scroll(0, 1000);
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

var card = document.querySelector(".card");
var displayproducts = document.querySelector(".displayproducts");

displayProductsFun = function displayProductsFun(e) {
  var productsInfo = [];
  var prodctfilter = e.target.innerText;
  var regSearch = new RegExp(prodctfilter, 'g');
  var hk = "";
  products.forEach(function (product) {
    if (regSearch.test(product.name)) {
      productsInfo.push(product);
      card.style.display = "block";
      hk += "<div class=\"prod\"><div class=\"text1\"><b>name: </b>".concat(product.name, "</div><div class=\"text2\"><b>brand: </b>").concat(product.brand, "</div><div class=\"text2\"><b>category: </b>").concat(product.category, "</div><div class=\"text2\"><b>description: </b>").concat(product.description, "</div><div class=\"text5\"><img src=\"").concat(product.image, "\"></div><div class=\"text2\"><b>inStoreSince: </b>").concat(product.inStoreSince, "</div><div class=\"text2\"><b>isdn: </b>").concat(product.isdn, "</div><div class=\"text2\"><b>model: </b>").concat(product.model, "</div><div class=\"text2\"><b>name: </b>").concat(product.name, "</div><div class=\"text2\"><b>price: </b>").concat(product.price, "</div><div class=\"text2\"><b>recommendations:</b>").concat(product.recommendations, "</div><div class=\"text2\"><b>store: </b>").concat(product.store, "</div></div>");
    }

    document.querySelector(".v").innerHTML = hk;
    console.log(productsInfo); // console.log(productsInfo)
  });
};

function clickxx() {
  card.style.display = "none";
}