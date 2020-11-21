"use strict";

products.sort(function (a, b) {
  return a.price - b.price;
});

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;

  if (searchTerm.length > 0) {
    var results = searchProducts(searchTerm);
    renderSearchResults(results);
  }
}

function searchProducts(searchTerm) {
  var results = [];
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      results.push(product);
    }
  });
  return results;
}

function renderSearchResults(results) {
  var root = document.getElementById('root');
  var html = '';
  results.forEach(function (product) {
    html += "<div class=\"productList\"><img src=".concat(product.image, "><p class=\"productList__p\">Product name: <b>").concat(product.name, "</b><br> Product Model: <b>").concat(product.model, "</b><br> Price: <b>").concat(product.price, " </b><br> Since: <b>").concat(product.inStoreSince, "</b> </p></div>");
  });
  root.innerHTML = html;
} // function seeAll(results) {
//     results.forEach(product => {
//         document.getElementById('allProducts').innerHTML = results
//     })
// };
// document.getElementById('allProducts').innerHTML = products
// console.log(products)}
// const allProducts = document.getElementById('allProducts');
//     let html = "";
// html += products
// allProducts.innerHTML =  products;
// }
// function sortByPrice(results){
//     const root=document.getElementById('root');
//     let html = '';
//     results.sort((a,b) => a.price-b.price)
//     console.log(results)
// } 
// function sortByPrice() {
//     products.sort((a, b) => a.price - b.price)
//     console.log(products)
// }