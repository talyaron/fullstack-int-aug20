"use strict";

var keys = document.querySelectorAll(".keyscontainer h1");
var TextBody = document.querySelector('#TextBody');
var maxNumberofStraiks = 3;
var word = {};
var Straiks = 0;
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    starGuessing(key.innerHTML);
  });
});

function checkStraiks(Straiks) {
  if (Straiks <= maxNumberofStraiks) {
    console.log("in te game");
    return true;
  } else {
    console.log("game over");
    TextBody.innerHTML = '<h1>Game Over</h1>';
    return false;
  }
}

function checkForMach(key) {
  var resolte = false;

  for (var i = 0; i < word.length; i++) {
    console.log("word:".concat(word[i].toUpperCase(), ", key:").concat(key.toUpperCase()));
    console.log(word[i].toUpperCase() === key.toUpperCase());

    if (word[i].toUpperCase() === key.toUpperCase()) {
      var letter = document.querySelector("#letter".concat(i));
      letter.innerHTML = key;
      resolte = true;
    }
  }

  return resolte;
}

function starGuessing(key) {
  console.log("the connent staricks: ".concat(Straiks));

  if (checkForMach(key) == false) {
    Straiks++;
    console.log(Straiks);
  }

  ;

  if (Straiks >= maxNumberofStraiks) {
    console.log('game over');
  }
}
/*---------------------- renders ------------------*/


function renderwordscrean() {
  /* get word from local */
  var b = sessionStorage.getItem('rendomWordObj');
  b = JSON.parse(b);
  TextBody.innerHTML = '';
  word = b.word;
  console.log(word);

  for (var i = 0; i < word.length; i++) {
    TextBody.innerHTML += "<h1 id=\"letter".concat(i, "\"></h1>");
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