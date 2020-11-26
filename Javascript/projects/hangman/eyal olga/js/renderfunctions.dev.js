"use strict";

var keys = document.querySelectorAll(".keyscontainer h1");
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    checkForMach(key.innerHTML);
    /* console.log(key.innerHTML) */
  });
});

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
  var wordsContainer = document.querySelector('#wordsContainer');
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
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == key) {
      var letter = document.querySelector("#letter".concat(i));
      letter.innerHTML = key;
    }
  }
}