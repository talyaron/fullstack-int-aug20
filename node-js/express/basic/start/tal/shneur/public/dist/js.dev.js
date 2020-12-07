"use strict";

var jokes = ["we are going to win this game", "this game is easy pisy", "we are grate programars", "you neale this one", "congrates to you you own", "we are the best group evevr"];
setInterval(function () {
  i = Math.floor(Math.random() * 6);
  Choosenjoke = jokes[i];
  console.log(Choosenjoke);
  document.getElementById('box').innerHTML = "<h1>you have loged to this website ".concat(data.timeSinceRefresh, " seconds ago</h1>");
}, 1000); // setInterval(() => {
//     fetch('/jokesa')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('box').innerHTML = `<h1>you have loged to this website ${data.jokes} seconds ago</h1>`
//         })
// }, 1000)

setInterval(function () {
  fetch('/timeSinceRefresh').then(function (response) {
    return response.json();
  }).then(function (data) {// document.getElementById('box').innerHTML = `<h1>you have loged to this website ${data.timeSinceRefresh} seconds ago</h1>`
  });
}, 1000);
var theSetences = document.getElementById("theSetences");