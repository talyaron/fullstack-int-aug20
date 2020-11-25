"use strict";

function cratecategorey() {
  var categorisarray = [];
  products.forEach(function (product) {
    categorisarray.push(product.category);
    duplicates(categorisarray);
  });
}

function duplicates(categorisarray) {
  var filterarray = [];
  categorisarray.forEach(function (category) {
    if (!filterarray.includes(category)) {
      filterarray.push(category);
      filterarray.sort(function (a, b) {
        if (a < b) return -1;
      });
    }
  });
  rendercategoris(filterarray);
}

function rendercategoris(filterarray) {
  var rendercategoris = document.getElementById("categoriesName");
  var html = '';
  filterarray.forEach(function (category) {
    html += "<div>".concat(category, "</div>\n        <div><img src=\"img/").concat(category, ".jpg\"></div>");
  });
  rendercategoris.innerHTML = html;
}