"use strict";

function OrderTheCategorys() {
  var categorys = [];
  var OrderdCategorys = [];
  products.forEach(function (product) {
    categorys.push(product.category);
  });

  try {
    categorys.forEach(function (c) {
      if (!OrderdCategorys.includes(c.toUpperCase())) {
        OrderdCategorys.push(c.toUpperCase());
      }
    });
  } catch (e) {
    categorys.forEach(function (c) {
      if (!OrderdCategorys.includes(c)) {
        OrderdCategorys.push(c);
      }
    });
  }

  OrderdCategorys = OrderdCategorys.sort();
  return OrderdCategorys;
}
/* Render NavBar */


function renderNavCategoris(categoris) {
  /*  console.log('renderNavCategoris function called'); */
  var Nav = document.getElementById('UlNavBar');
  var ul = '';
  categoris.forEach(function (category) {
    // ul += `<li class="nav-item "><a class="nav-link" href="#">${category}</a></li>`
    ul += "<li class=\"nav-item \"><a class=\"nav-link\" href=\"#\">".concat(category, "</a></li>");
  });
  Nav.innerHTML = ul;
}

function removeDuplicateObjectFromArray(array, key) {
  var check = {};
  var res = [];

  for (var i = 0; i < array.length; i++) {
    if (!check[array[i][key]]) {
      check[array[i][key]] = true;
      res.push(array[i]);
    }
  }

  return res;
}

function getProductPic(category) {
  return uniqcategory.filter(function (product) {
    return product.category.toUpperCase() == category;
  });
}

function renderBlocksCategoris(categoris) {
  var BodyContainer = document.getElementById('BodyContainer');
  var NewBodyContainer = '';
  categoris.forEach(function (category) {
    var categoryProducts = getProductPic(category);
    /*  console.log(categoryProducts[0]); */

    var card = "<div class=\"card bg-dark text-black\">\n                  <img src=\"".concat(categoryProducts[0].image, "\" class=\"card-img\" alt=\"").concat(category, "\">\n                  <div class=\"card-img-overlay\">\n                  <h3 class=\"card-title text-center\">").concat(category, "</h3>\n                  </div>\n                  </div>");
    NewBodyContainer += card;
  });
  BodyContainer.innerHTML = NewBodyContainer;
}

function startrendernav() {
  var categoris = OrderTheCategorys();
  uniqcategory = removeDuplicateObjectFromArray(products, 'category');
  renderNavCategoris(categoris);
  renderBlocksCategoris(categoris);
}