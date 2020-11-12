"use strict";

var theElement = [];

function addElementToTheScrollBar(e) {
  var currntElement = e.target;
  console.dir(currntElement.dataset.color);
  theElement.push(currntElement);
  console.dir(theElement);
  var elemetsMainBox = document.getElementById('addedElements');
  console.dir(elemetsMainBox);
  theElement.forEach(function (element) {
    elemetsMainBox.innerHTML += "<div data-set=".concat(theElement.dataset.color, "\"></div>");
  });
}