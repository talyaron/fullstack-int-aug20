"use strict";

function handleClickCategories(e) {
  console.log(e);
  html = '';
  var filterResModel = '';
  var filterResBrand = '';
  products.forEach(function (product) {
    if (e.toElement.id == product.category) {
      html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
    }

    root.innerHTML = html;
    filterByModel.innerHTML = filterResModel;
    filterByBrand.innerHTML = filterResBrand;
  });
}