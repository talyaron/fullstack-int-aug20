"use strict";

function OrderTheCategories() {
  var categories = [];
  var OrderedCategories = [];
  products.forEach(function (product) {
    categories.push(product.category);
  });

  try {
    categories.forEach(function (c) {
      if (!OrderedCategories.includes(c.toUpperCase())) {
        OrderedCategories.push(c.toUpperCase());
      }
    });
  } catch (e) {
    categories.forEach(function (c) {
      if (!OrderedCategories.includes(c)) {
        OrderedCategories.push(c);
      }
    });
  }

  OrderedCategories = OrderedCategories.sort();
  return OrderedCategories;
}
/* Render NavBar */


function renderNavCategories(Categories) {
  /*  console.log('renderNavCategories function called'); */
  var Nav = document.getElementById('UlNavBar');
  var ul = '';
  Categories.forEach(function (category) {
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

function renderBlocksCategories(Categories) {
  var BodyContainer = document.getElementById('BodyContainer');
  var NewBodyContainer = '';
  Categories.forEach(function (category) {
    var categoryProducts = getProductPic(category);
    /*  console.log(categoryProducts[0]); */

    var card = "<div class=\"card bg-dark text-black\" onclick=\"RenderProductsInCategory('".concat(category, "')\">\n                  <img src=\"").concat(categoryProducts[0].image, "\" class=\"card-img\" alt=\"").concat(category, "\">\n                  <div class=\"card-img-overlay\">\n                  <h3 class=\"card-title text-center\">").concat(category, "</h3>\n                  </div>\n                  </div>");
    NewBodyContainer += card;
  });
  BodyContainer.innerHTML = NewBodyContainer;
}

function StartRenderCategories() {
  var Categories = OrderTheCategories();
  uniqcategory = removeDuplicateObjectFromArray(products, 'category');
  renderNavCategories(Categories);
  renderBlocksCategories(Categories);
}