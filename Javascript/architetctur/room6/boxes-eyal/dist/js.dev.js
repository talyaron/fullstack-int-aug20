"use strict";

var ColorBox = document.querySelectorAll(".Box");
var BoxWrapperOUTput = document.querySelector('.BoxWrapperOUTput');
ColorBox.forEach(function (element) {
  element.addEventListener('click', function (event) {
    BoxWrapperOUTput.innerHTML += "<div class=\"Box\" id=\"".concat(element.id, "\"></div>");
  });
});