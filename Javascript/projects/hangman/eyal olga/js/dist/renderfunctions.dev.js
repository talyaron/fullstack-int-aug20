"use strict";

function renderCategories() {
  creatCategoriesArray();
  var BodyContainer = document.querySelector('.categorysContainer');
  var NewBodyContainer = '';
  categories.forEach(function (category) {
    var word = "<h1 onclick=\"oncategoryclick(event)\"> ".concat(category.category, "</h1>");
    NewBodyContainer += word;
  });
  BodyContainer.innerHTML = NewBodyContainer;
}