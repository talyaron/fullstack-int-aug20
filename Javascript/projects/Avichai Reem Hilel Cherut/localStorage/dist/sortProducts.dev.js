"use strict";

function handlePrice(e) {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  root2.innerHTML = "";

  for (i = 0; i < products.length; i++) {
    if (chosenCategory == products[i].category) {
      root2.innerHTML += "<p class=\"product option\"><img src=\"".concat(products[i].image, "\"> \u05E9\u05DD \u05DE\u05D5\u05E6\u05E8: ").concat(products[i].name, "<br> \u05DE\u05D5\u05D3\u05DC: ").concat(products[i].model, ", \u05DE\u05D7\u05D9\u05E8: ").concat(products[i].price, ", \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA: ").concat(products[i].recommendations, "</p>");
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
      root2.innerHTML += "<p class=\"product option\"><img src=\"".concat(products[i].image, "\"> \u05E9\u05DD \u05DE\u05D5\u05E6\u05E8: ").concat(products[i].name, "<br> \u05DE\u05D5\u05D3\u05DC: ").concat(products[i].model, ", \u05DE\u05D7\u05D9\u05E8: ").concat(products[i].price, ", \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA: ").concat(products[i].recommendations, "</p>");
    }
  }
}