"use strict";

var clickArray = [];
var storedClicks = JSON.parse(localStorage.getItem("clickArray"));
var root = document.getElementById("root");
storedClicks.forEach(function (btn) {
  root.innerHTML += "<div><p>".concat(btn, "</p></div>");
});

function handleClick(e) {
  var btnClicked = e.target.name;
  clickArray.push(btnClicked);
  localStorage.setItem("clickArray", JSON.stringify(clickArray));
  var storedClicks = JSON.parse(localStorage.getItem("clickArray"));
  var root = document.getElementById("root");
  var lastBtnClicked = storedClicks[storedClicks.length - 1];
  root.innerHTML += "<div><p>".concat(lastBtnClicked, "</p></div>");
  fetch("/getbtn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      btnClicked: btnClicked
    })
  }).then(function (data) {
    console.log(data);
  });
}