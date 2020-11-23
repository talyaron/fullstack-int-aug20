"use strict";

function handlePrice(e) {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  root2.innerHTML = "";

  for (i = 0; i < products.length; i++) {
    if (chosenCategory == products[i].category) {
      root2.innerHTML += "<p>Product name: ".concat(products[i].name, ",Product category: ").concat(products[i].category, ", Product Model: ").concat(products[i].model, ", Price: ").concat(products[i].price, ", Recommendations: ").concat(products[i].recommendations, "<img src=\"").concat(products[i].image, "\"></p>");
    }
  }
}

function handleRecommend(e) {
  products.sort(function (a, b) {
    return a.recommendations - b.recommendations;
  });
  root2.innerHTML = "";

  for (i = 0; i < products.length; i++) {
    if (chosenCategory == products[i].category) {
      root2.innerHTML += "<p>Product name: ".concat(products[i].name, ",Product category: ").concat(products[i].category, ", Product Model: ").concat(products[i].model, ", Price: ").concat(products[i].price, ", Recommendations: ").concat(products[i].recommendations, "<img src=\"").concat(products[i].image, "\"></p>");
    }
  }
}