"use strict";

function handleClickCategories(e) {
  renderSearchResults(results);
  filterModel(e);
  filterBrand(e);
  results = [];
  html = '';
  filterResModel = '';
  filterResBrand = '';
  containerFilter = "<div>Filter by model <div id=\"filterByModel\"></div></div>\n  <div>Filter by brand <div id=\"filterByBrand\"></div></div>";
  filterBy.innerHTML = containerFilter;
  var filterByModel = document.getElementById('filterByModel');
  var filterByBrand = document.getElementById('filterByBrand');
  btnsSort += "<span>Sort by:<button id=\"btnSortPrice\" onclick='sortPrice(event)' type=\"submit\"> price</button>\n    <button id=\"btnSortRating\" type=\"submit\" onclick='sortRating(event)'>rating</button></span>";
  products.forEach(function (product) {
    sortPrice();
    renderSearchResults(results);

    if (e.toElement.id == product.category) {
      html += "<p id=\"".concat(product.isdn, "\" onclick=handleClick(event)>Product name: ").concat(product.name, " </br> Product Model: ").concat(product.model, " </br> Price: ").concat(product.price, "</p>");
      filterResModel += " <div><li id=\"btnResModel\" style=\"min-width:25px; min-height:25px\" onclick='filterModel(event)'>".concat(product.model, "</li>\n        </div>");
      filterResBrand += " <div><li id=\"btnResBrand\" style=\"min-width: 25px; min-height: 25px\"  onclick='filterBrand(event)'>".concat(product.brand, "</li></div>");
      results.push(product);
      console.log(results);
    }

    root.innerHTML = btnsSort + html;
    filterByBrand.innerHTML = filterResBrand;
    filterByModel.innerHTML = filterResModel;
  });
}