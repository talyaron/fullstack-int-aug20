"use strict";

var keys = document.querySelectorAll(".keyscontainer h1");
var TextBody = document.querySelector('#TextBody');
var TextHeader = document.querySelector("#TextHeader");
var maxNumberofStraiks = 6;
var word = {};
var Straiks = 0;
TextHeader.innerHTML = "";

for (var i = 0; i < maxNumberofStraiks; i++) {
  TextHeader.innerHTML += "<span class=\"material-icons\">favorite</span>";
}

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

  for (var _i = 0; _i < word.length; _i++) {
    console.log("word:".concat(word[_i].toUpperCase(), ", key:").concat(key.toUpperCase()));
    console.log(word[_i].toUpperCase() === key.toUpperCase());

    if (word[_i].toUpperCase() === key.toUpperCase()) {
      var letter = document.querySelector("#letter".concat(_i));
      letter.innerHTML = key;
      resolte = true;
    }
  }

  return resolte;
}

function starGuessing(key) {
  TextHeader.innerHTML = '';
  console.log("the connent staricks: ".concat(Straiks));

  if (checkForMach(key) == false) {
    Straiks++;
    var livesLeft = maxNumberofStraiks - Straiks;

    for (var _i2 = 0; _i2 < livesLeft; _i2++) {
      TextHeader.innerHTML += "<span class=\"material-icons\">favorite</span>";
    }

    console.log(Straiks);
  }

  ;

  if (Straiks >= maxNumberofStraiks) {
    console.log('game over');
    TextBody.innerHTML = '';
    TextBody.innerHTML += "<h1>G</h1>";
    TextBody.innerHTML += "<h1>A</h1>";
    TextBody.innerHTML += "<h1>M</h1>";
    TextBody.innerHTML += "<h1>E</h1>";
    TextBody.innerHTML += "<h1> </h1>";
    TextBody.innerHTML += "<h1>O</h1>";
    TextBody.innerHTML += "<h1>V</h1>";
    TextBody.innerHTML += "<h1>E</h1>";
    TextBody.innerHTML += "<h1>R</h1>";
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