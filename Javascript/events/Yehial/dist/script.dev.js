"use strict";

var targetDiv = document.querySelector("#testDiv");
targetDiv.addEventListener('click', function (eventTest) {
  console.log("clicked");
  eventTest.target.style.margin = '100px';
});
targetDiv.addEventListener('dblclick', function (eventTest) {
  console.log(eventTest);
  eventTest.target.style.margin = '300px';
  eventTest.target.style.trsndform;
});