"use strict";

var keys = document.querySelectorAll(".keyscontainer h1");
var wordsContainer = document.querySelector('#wordsContainer');
var maxNumberofStraiks = 3;
var Straiks = 0;
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    if (checkStraiks(Straiks)) {
      if (checkForMach(key.innerHTML == false)) {
        Straiks++;
      }
    }
    /* console.log(key.innerHTML) */

  });
});

function checkStraiks(Straiks) {
  if (Straiks <= maxNumberofStraiks) {
    console.log("in te game");
    return true;
  } else {
    console.log("game over");
    wordsContainer.innerHTML = '<h1>Game Over</h1>';
    return false;
  }
}

function renderCategories() {
  creatCategoriesArray();
  var BodyContainer = document.querySelector('.categorysContainer');
  var NewBodyContainer = '';
  categories.forEach(function (category) {
    var word = "<h1 onclick=\"oncategoryclick(event)\">".concat(category.category, "</h1>");
    NewBodyContainer += word;
  });
  BodyContainer.innerHTML = NewBodyContainer;
}

var word = {};

function renderwordscrean() {
  /* get word from local */
  var b = sessionStorage.getItem('rendomWordObj');
  b = JSON.parse(b);
  wordsContainer.innerHTML = '';
  word = b.word;
  console.log(word);

  for (var i = 0; i < word.length; i++) {
    wordsContainer.innerHTML += "<h1 id=\"letter".concat(i, "\"></h1>");
  }
}

function checkForMach(key) {
  firstCall = false;

  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == key) {
      var letter = document.querySelector("#letter".concat(i));
      letter.innerHTML = key;
    } else {
      return "no mach";
    }
  }
}