"use strict";

function handleFilterProducts(e) {
  almostFilteredArray = [];
  var categoryToSort = e.target.parentNode.parentNode.children[15].innerText;
  var regSearch = new RegExp(categoryToSort, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.category)) {
      almostFilteredArray.push(product);
      var filteredArray = almostFilteredArray.filter(function (product) {
        return product.recommendations > 50;
      }).sort(function (a, b) {
        return a.recommendations - b.recommendations;
      });
      renderFilterArray(filteredArray);
    }
  });
}

function renderFilterArray(filteredArray) {
  var createdCategoryPage = document.getElementById('createdCategoryPage');
  createdCategoryPage.setAttribute("style", "display:none;");
  var filteredProducts = document.getElementById("filteredProducts");
  var html = "";
  filteredArray.forEach(function (product) {
    html += "\n        <img class=\"productPic\" src=\"".concat(product.image, "\" alt=\"\">\n        <div class=\"clickableName\" onclick=handleClickedName(event) >").concat(product.name, "</div>\n        <div>").concat(product.brand, "</div>\n        <div><p>In Store Since:</p>").concat(product.inStoreSince, "</div>\n        <div><p>Price:</p>").concat(product.price, "\u20AA</div>\n        <div><p>Recommendation:</p>").concat(product.recommendations, "/100</div>\n        <div style=\"display:none;\">").concat(product.category, "</div>\n        <hr>\n        ");
  });
  filteredProducts.innerHTML = html;
}