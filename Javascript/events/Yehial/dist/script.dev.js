"use strict";

var targetDiv = document.querySelector("#testDiv");
targetDiv.addEventListener('click', function (eventTest) {
  console.log("clicked");
  eventTest.target.style.margin = '100px';
});
targetDiv.addEventListener('dblclick', function (eventTest) {
  console.log("dblclick");
  eventTest.target.style.margin = '300px';
});