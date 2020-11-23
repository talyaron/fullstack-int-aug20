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
  var Nav = document.getElementById('UlNavBar');
  var ul = '';
  Categories.forEach(function (category) {
    ul += "<li class=\"nav-item \"><a class=\"nav-link\" style=\"cursor:pointer\" onclick=\"RenderBrandsCategory('".concat(category, "')\">").concat(category, "</a></li>");
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
    var card = "<div style=\"border-radius: 10px;\" class=\"card bg-dark text-black \" onclick=\"RenderBrandsCategory('".concat(category, "')\">\n                  <img src=\"").concat(categoryProducts[0].image, "\" class=\"card-img\" style=\"width: auto;\" alt=\"").concat(category, "\">\n                  <h3 class=\"card-title text-center  \" style=\"margin-bottom: 0px; margin-top: 3px;\">").concat(category, "</h3>\n                  </div>");
    NewBodyContainer += card;
  });
  BodyContainer.innerHTML = NewBodyContainer;
  BodyContainer.style = "display: flex; flex-wrap: wrap";
}

function StartRenderCategories() {
  var Categories = OrderTheCategories();
  uniqcategory = removeDuplicateObjectFromArray(products, 'category');
  renderNavCategories(Categories);
  renderBlocksCategories(Categories);
}