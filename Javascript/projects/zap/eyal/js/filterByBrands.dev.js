"use strict";

var FilteredBrands = [];

function FilterProductsByCategory(category) {
  var ProductsByCategory = products.filter(function (product) {
    return product.category.toUpperCase() == category;
  });
  return ProductsByCategory;
}

function renderFilteredBrands(FilteredBrands) {
  var BodyContainer = document.getElementById('BodyContainer');
  var ProductContainer = '';
  BodyContainer.innerHTML = '';
  FilteredBrands.forEach(function (product) {
    var card = "<div style=\"border-radius: 10px;\" class=\"card bg-dark text-black \" onclick=\" RenderProductsInCategory('".concat(product.category, "','").concat(product.brand, "')\">\n                  <img src=\"").concat(product.image, "\" class=\"card-img\" style=\"width: auto;\" alt=\"").concat(product.brand, "\">\n                  <h3 class=\"card-title text-center  \" style=\"margin-bottom: 0px; margin-top: 3px;\">").concat(product.brand, "</h3>\n                  </div>");
    ProductContainer += card;
  });
  BodyContainer.innerHTML += ProductContainer;
}

function RenderBrandsCategory(category) {
  FilteredBrands = FilterProductsByCategory(category);
  var uniqbrand = removeDuplicateObjectFromArray(FilteredBrands, 'brand');
  renderFilteredBrands(uniqbrand);
  console.log(uniqbrand);
}