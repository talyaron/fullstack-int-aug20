"use strict";

var wordsArray = ["faboulus", "interactive", "gorgeous", "spectecular", "javascript"];
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var splittedWordArray = [];
var counter = 0;

function randomWordGenerator() {
  var randomNumber = Math.floor(Math.random(wordsArray.length) * wordsArray.length);
  randomWord = wordsArray[randomNumber];
  console.log(randomWord);
  splittedWordArray = randomWord.split("");
  var hiddenLetters = document.getElementById("hiddenLetters");
  splittedWordArray.forEach(function (letter) {
    hiddenLetters.innerHTML += "<div class=hiddenLetter></div>";
  });
}

function renderLetters() {
  lettersArray.forEach(function (letter) {
    var lettersArray = document.getElementById("lettersArray");
    lettersArray.innerHTML += "<button class=\"clickableLetter\" onclick=\"handleClickedLetter(event)\">".concat(letter, "</button>");
  });
}

function handleClickedLetter(e) {
  var clickedLetter = e.target.innerHTML;
  var indexOfClickeLetter = lettersArray.indexOf(clickedLetter);
  var regExp = new RegExp(clickedLetter, "g");

  if (regExp.test(splittedWordArray)) {
    var _lettersArray = document.getElementById("lettersArray");

    _lettersArray.removeChild(_lettersArray.childNodes[indexOfClickeLetter]);

    var letterIndexes = [];

    for (var index = randomWord.indexOf(clickedLetter); index >= 0; index = randomWord.indexOf(clickedLetter, index + 1)) {
      letterIndexes.push(index);
    }

    letterIndexes.forEach(function (index) {
      var hiddenLetters = document.getElementById("hiddenLetters");
      hiddenLetters.children[index].innerHTML = clickedLetter;
      hiddenLetters.children[index].setAttribute("class", "showLetter");
    });
  } else {
    var coverPic = document.getElementById("coverPic");
    coverPic.children[counter].setAttribute("style", "display:none;");
    counter++;

    if (counter >= 5) {
      alert("Game over, Please Refresh to play again!");
    }
  } //Check if the word was guessed or not..


  var x = document.querySelectorAll('.showLetter').length;
  var y = splittedWordArray.length;

  if (x == y) {
    alert("Congartulation! You have guessed the word! Refresh to try another!");
  }
}