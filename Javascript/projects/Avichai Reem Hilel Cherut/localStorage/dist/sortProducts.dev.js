"use strict";

function handlePrice(e) {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  root.innerHTML = "";

  for (i = 0; i < products.length; i++) {
    if (productName == products[i].category) {
      root.innerHTML += "<p>Product name: ".concat(products[i].category, ", Product Model: ").concat(products[i].model, ", Price: ").concat(products[i].price, ", Recommendations: ").concat(products[i].recommendations, "</p>");
    }
  }
}

function handleRecommend(e) {
  products.sort(function (a, b) {
    return a.recommendations - b.recommendations;
  });
  root.innerHTML = "";

  for (i = 0; i < products.length; i++) {
    if (productName == products[i].category) {
      root.innerHTML += "<p>Product name: ".concat(products[i].category, ", Product Model: ").concat(products[i].model, ", Price: ").concat(products[i].price, ", Recommendations: ").concat(products[i].recommendations, "</p>");
    }
  }
}