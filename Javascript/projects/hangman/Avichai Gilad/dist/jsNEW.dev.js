"use strict";

var words = ["helo", "work pls", "testing", "helo twice", "yelo"];
var lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var root = document.querySelector("#root");
var lettersDom = document.getElementById("letters");
var strikesDom = document.getElementById("strikes");
var chosenWordArray = [];
var strikes = 6;
var counter = 0;

function handleNewGame() {
  var random = Math.floor(Math.random() * words.length);
  chosenWord = words[random];
  strikes = 6;
  strikesDom.innerHTML = "You have ".concat(strikes, " strikes left");
  document.getElementById("hangman").innerHTML = "<img src=\"img/6.jpeg\">";
  var html = "";
  console.log(chosenWord);
  document.getElementById("newGame").style.display = "none";
  chosenWordArray = [];

  for (i = 0; i < chosenWord.length; i++) {
    if (chosenWord.charAt(i) != " ") {
      chosenWordArray.push("_");
    } else {
      chosenWordArray.push("-");
    }
  }

  chosenWordArray.forEach(function (letter) {
    html += " ".concat(letter, " ");
  });
  root.innerHTML = html;
  console.log(chosenWordArray);
}

function renderLetters() {
  lettersDom.innerHTML = "";
  lettersArray.forEach(function (letter) {
    lettersDom.innerHTML += "<button id=\"buttonLetter\" data-letter=\"".concat(letter, "\" onclick=\"handleLetterClick(event)\" style=\"grid-area: ").concat(letter, "\">").concat(letter, "</button>");
  });
}

function handleLetterClick(e) {
  var clickedLetter = e.target.dataset.letter;
  console.log(clickedLetter);
  var regLetter = new RegExp(clickedLetter, 'gi');
  root.innerHTML = "";
  html = "";
  e.target.style.backgroundColor = "red";
  e.target.style.pointerEvents = "none";

  for (i = 0; i < chosenWordArray.length; i++) {
    if (regLetter.test(chosenWord.charAt(i))) {
      console.log("found");
      chosenWordArray.splice(i, 1, "".concat(clickedLetter));
    } else {
      counter++;
    }
  }

  chosenWordArray.forEach(function (letter) {
    html += " ".concat(letter, " ");
  });
  root.innerHTML = html;

  if (counter == chosenWordArray.length) {
    strikes--;
    strikesDom.innerHTML = "You have ".concat(strikes, " strikes left");
    document.getElementById("hangman").innerHTML = "<img src=\"img/".concat(strikes, ".jpeg\">");
  }

  counter = 0;

  if (strikes == 0) {
    lettersDom.innerHTML = "";
    root.innerHTML = "You Lost";
    strikesDom.innerHTML = "";
    document.getElementById("newGame").style.display = "block";
  }

  var victoryCondition = chosenWordArray.length;
  chosenWordArray.forEach(function (letter) {
    if (letter != "_") {
      victoryCondition--;
    }
  });

  if (victoryCondition == 0) {
    lettersDom.innerHTML = "";
    root.innerHTML = "You won";
    document.getElementById("newGame").style.display = "block";
    console.log("you won");
  }
}