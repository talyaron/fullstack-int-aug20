"use strict";

var FilteredProducts = [];

function FilterProductsByCategoryandBrand(category, brand) {
  var ProductsByCategory = products.filter(function (filtered) {
    return filtered.category.toUpperCase() == category.toUpperCase() && filtered.brand.toUpperCase() == brand.toUpperCase();
  });
  console.log("this is the filterd: ".concat(ProductsByCategory));
  return ProductsByCategory;
}

function renderFilteredProducts(FilteredProducts) {
  var BodyContainer = document.getElementById('BodyContainer');
  var ProductContainer = '';
  BodyContainer.innerHTML = '';
  FilteredProducts.forEach(function (product) {
    var card = "<div class=\"card mb-3\" style=\"max-width: 90%; max-height:25%; margin: auto;\" onclick=\"RenderProductScreen('".concat(product.isdn, "')\">\n         <div class=\"row no-gutters\">\n           <div class=\"col-md-4\">\n             <img src=\"").concat(product.image, "\" style=\"width: 90%; height: 90%; class=\"card-img\" alt=\"...\">\n           </div>\n           <div class=\"col-md-8\">\n             <div class=\"card-body\">\n               <h5 class=\"card-title\">").concat(product.brand, "  ").concat(product.model, "</h5>\n               <p class=\"card-text\">The ").concat(product.category, " from  ").concat(product.brand, " This is the ").concat(product.description, "</p>\n               <p class=\"card-text\"><small class=\"text-muted\">The price is only: ").concat(product.price, " $</small></p>\n             </div>\n           </div>\n         </div>\n       </div>");
    ProductContainer += card;
  });
  BodyContainer.innerHTML += ProductContainer;
  BodyContainer.style = "display: block; flex-wrap: none; ";
}

function RenderProductsInCategory(category, brand) {
  FilteredProducts = FilterProductsByCategoryandBrand(category, brand);
  renderFilteredProducts(FilteredProducts);
  console.log(FilteredProducts);
}