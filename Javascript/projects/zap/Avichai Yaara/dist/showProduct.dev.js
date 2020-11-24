"use strict";

function handleShowProduct(e) {
  var img = e.target.currentSrc;
  console.log(e.target.dataset.td);
  var chosenProduct = e.target.dataset.td;
  console.log(results[chosenProduct]);
  console.log(results);
}