"use strict";

var words = "hello test";
var clickedLetter = "";
var strikes = 3;
var counter = 0;
var root = document.querySelector("#root");

function createArray() {
  var clickedLetterArray = [];

  for (i = 0; i < words.length; i++) {
    if (words.charAt(i) != " ") {
      clickedLetterArray.push(" _ ");
    } else {
      clickedLetterArray.push("-");
    }
  }

  return clickedLetterArray;
}

var arr = createArray();

function handleLetterClick(e) {
  // get letter clicked
  clickedLetter = e.target.dataset.letter;
  console.log(clickedLetter);
  var letterCheck = new RegExp(clickedLetter, 'gi');

  for (i = 0; i < arr.length; i++) {
    if (letterCheck.test(words.charAt(i))) {
      console.log("found");
      arr.splice(i, 1, "".concat(clickedLetter));
    } else {
      counter++;
    }
  }

  var html = "";
  arr.forEach(function (e) {
    html += "".concat(e);
  });
  root.innerHTML = html;

  if (counter == arr.length) {
    strikes--;
    counter = 0;
  } else {
    counter = 0;
  }

  if (strikes == 0) {
    root.innerHTML = "Gaameee over! Loser";

    for (i = 1; i < 27; i++) {
      document.querySelector("#button".concat(i)).style.display = "none";
    }

    document.querySelector("#newGame").style.display = "block";
  }
}

function newGame() {
  strikes = 3;

  for (i = 1; i < 27; i++) {
    document.querySelector("#button".concat(i)).style.display = "inline";
  }

  createArray();
  root.innerHTML = "".concat(arr);
}