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
  var letterClicked = e.target;
  var regExp = new RegExp(clickedLetter, "g");

  if (regExp.test(splittedWordArray)) {
    var letterIndexes = [];

    for (var index = randomWord.indexOf(clickedLetter); index >= 0; index = randomWord.indexOf(clickedLetter, index + 1)) {
      letterIndexes.push(index);
    }

    letterIndexes.forEach(function (index) {
      var hiddenLetters = document.getElementById("hiddenLetters");
      hiddenLetters.children[index].innerHTML = clickedLetter;
      hiddenLetters.children[index].setAttribute("class", "showLetter");
      letterClicked.setAttribute("style", "background-color:green");
      letterClicked.style.pointerEvents = "none";
    });
  } else {
    letterClicked.setAttribute("style", "background-color:red");
    letterClicked.style.pointerEvents = "none";
    var coverPic = document.getElementById("coverPic1");
    coverPic.children[counter].setAttribute("style", "display:none");
    counter++;

    if (counter >= 5) {
      Swal.fire({
        icon: 'error',
        title: 'Sorry, 5 mistakes and you are out!',
        text: 'Refresh to play again!'
      });
    }
  }

  var x = document.querySelectorAll('.showLetter').length;
  var y = splittedWordArray.length;

  if (x == y) {
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'Think you are good? Refresh to try another word'
    });
  }
}