"use strict";

var ColorBox = document.querySelector("#ColorBox1");
var BoxWrapperOUTput = document.querySelector("#BoxWrapperOUTput");

function creatBox() {
  BoxWrapperOUTput.style.innethtml += "<div class=\"Box\"></div>";
  console.log(BoxWrapperOUTput);
}

ColorBox.addEventListener('click', function (event) {
  creatBox();
  console.log("OK");
});