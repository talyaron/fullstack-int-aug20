"use strict";

function handleSortProducts(e) {
  var categoryToSort = e.target.parentNode.parentNode.children[15].innerText;
  var sortedArray = [];
  var regSearch = new RegExp(categoryToSort, 'g');
  products.forEach(function (product) {
    if (regSearch.test(product.category)) {
      sortedArray.push(product);
      sortedArray.sort(function (a, b) {
        return a.price - b.price;
      });
      renderSortedArray(sortedArray);
    }
  });
}

function renderSortedArray(sortedArray) {
  var createdCategoryPage = document.getElementById('createdCategoryPage');
  createdCategoryPage.setAttribute("style", "display:none;");
  var sortedProducts = document.getElementById("sortedProducts");
  var html = "";
  sortedArray.forEach(function (product) {
    html += "\n        <img class=\"productPic\" src=\"".concat(product.image, "\" alt=\"\">\n        <div class=\"clickableName\" onclick=handleClickedName(event) >").concat(product.name, "</div>\n        <div>").concat(product.brand, "</div>\n        <div><p>In Store Since:</p>").concat(product.inStoreSince, "</div>\n        <div><p>Price:</p>").concat(product.price, "\u20AA</div>\n        <div><p>Recommendation:</p>").concat(product.recommendations, "/100</div>\n        <div style=\"display:none;\">").concat(product.category, "</div>\n        <hr>\n        ");
  });
  sortedProducts.innerHTML = html;
}