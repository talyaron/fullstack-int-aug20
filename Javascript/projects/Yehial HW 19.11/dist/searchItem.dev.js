"use strict";

var results = [];

function handleSearch(theEvent) {
  theEvent.preventDefault();
  var searchTerm = theEvent.target.children.search.value;

  if (searchTerm.length > 2) {
    var resultsAfterSearch = searchItemFromData(searchTerm);
    renderSearchResults(resultsAfterSearch);
  }
}

function searchItemFromData(searchTerm) {
  var regSearch = new RegExp(searchTerm, 'g');
  products.forEach(function (item) {
    if (regSearch.test(item.name) || regSearch.test(item.category) || regSearch.test(item.model)) {
      results.push(item);
    }
  });
  return results;
}

function renderSearchResults(itemsAfterSearch) {
  var rootDiv = document.getElementById('root');
  var htmlBuild = '';
  itemsAfterSearch.forEach(function (item) {
    htmlBuild += "\n                        <div class=\"singel__Item\" onclick=\"itemProperties(event)\">\n                       \n                            <p class=\"singel__Item__Description\"   name=\"".concat(item.model, "\" >Product name: ").concat(item.name, ", Product Model: ").concat(item.model, ", Price: ").concat(item.price, "</p>\n                       \n                       \n                            <div class=\"singel__Item__Popup\" name=\"prop\">\n                                <img src=").concat(item.image, "  style='height: 300px;width: 300px;display:block;' alt=\"\">\n                                \n                            </div>\n\n                        </div>\n                      ");
  });
  rootDiv.innerHTML = htmlBuild;
}