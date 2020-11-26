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

function renderSearchResults(results) {
  var filterResModel = '';
  var filterResBrand = '';
  var btnsSort = '';
  btnsSort += "<span>Sort by:<button id=\"btnSortPrice\" onclick='sortPrice(event)' type=\"submit\"> price</button>\n    <button id=\"btnSortRating\" type=\"submit\" onclick='sortRating(event)'>rating</button></span> \n      ";
  results.forEach(function (product) {
    filterResModel += " <div><li id=\"btnResModel\" style=\"min-width:50px; min-height:50px\" onclick='filterModel(event)'>".concat(product.model, "</li>\n        </div>");
    filterResBrand += " <div><li id=\"btnResBrand\" type=\"submit\" style=\"min-width: 50px; min-height: 50px\"  onclick='filterBrand(event)'>".concat(product.brand, "</li></div>");
  });
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  root.innerHTML = btnsSort + filterResModel + filterResBrand + html;
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

var btnSortPrice = document.getElementById('btnSortPrice');
var btnSortRating = document.getElementById('btnSortRating');

function sortPrice() {
  console.log('btnSortPrice');
  html = '';
  results.sort(function (a, b) {
    if (a.price < b.price) return -1;
  });
  console.log(results);
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  renderSearchResults(results);
}

function sortRating() {
  console.log('btnSortRating');
  html = '';
  results.sort(function (a, b) {
    if (a.recommendations < b.recommendations) return -1;
  });
  console.log(results);
  results.forEach(function (product) {
    html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
  });
  renderSearchResults(results);
}

var btnResModel = document.getElementById('btnResModel');
var btnResBrand = document.getElementById('btnResBrand');

function filterModel(e) {
  console.log('btnResModel');
  html = '';
  results.filter(function (result) {
    if (e.target.textContent == result.model) {
      html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
      root.innerHTML = html;
    }
  });
  /*results.forEach(product => {
    if(e.target.model !==product.model){
      console.log('false')
    }else{
      html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
      root.innerHTML = html
    }
    
  })*/
}
/*function filterModel() {
  console.log('btnSortRating')
  html = ''
  results.filter(result => result.model)
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
  renderSearchResults(results)
}*/

/*let newBooks = books[0].filter(book => book.year > 1999).sort((a, b) => a.year - b.year)
        console.log(newBooks);

        console.log((() => 'bla bla')())*/