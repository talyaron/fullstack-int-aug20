"use strict";

function handleClick(e) {
  var choosenColor = e.target.className;
  console.log(choosenColor);
  var newDiv = document.querySelector("#newDiv");
  return newDiv.innerHTML += "<div class=".concat(choosenColor, "></div>");
}