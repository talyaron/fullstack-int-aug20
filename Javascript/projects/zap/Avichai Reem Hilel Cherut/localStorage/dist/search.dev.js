"use strict";

function handleSearch(e) {
  e.preventDefault();
  var searchTerm = e.target.children.search.value;

  if (searchTerm.length > 2) {
    var _results = searchProducts(searchTerm); // renderSearchResults(results);

  }

  if (searchTerm.length < 1) {}
}

var results = [];

function searchProducts(searchTerm) {
  results = [];
  var regSearch = new RegExp(searchTerm, 'gi');
  products.forEach(function (product) {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      results.push(product);
    }
  });
  console.log(results);
  localStorage.setItem("results", JSON.stringify(results));
  window.location.href = "search.html"; // window.open('search.html')
  // location.replace("search.html")

  return results;
} // function renderSearchResults(results) {
//     const root = document.getElementById('root');
//     // filterButtons.innerHTML = '';
//     let html = '';
//     results.forEach(product => {
//         html += `<p>Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</p><a>`
//     })
//     root.innerHTML = html;
// }