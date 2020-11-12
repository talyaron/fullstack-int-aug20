"use strict";

var theElement = [];

function addElementToTheScrollBar(e) {
  var currntElement = e.target;
  theElement.push(currntElement);
  console.dir(theElement);
  var elemetsMainBox = document.getElementById('addedElements');
  console.dir(elemetsMainBox);
  elemetsMainBox.innerHTML += theElement;
}