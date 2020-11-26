"use strict";

var words = ["helo test", "test", "subject", "something", "random", "bla blues"];
var clickedLetter = "";
var strikes = 3;
var counter = 0;
var root = document.querySelector("#root");
var word = randomWord();
var arr = createArray();

function randomWord() {
  var random = Math.floor(Math.random() * 6);
  var word = words[random];
  return word;
}

function newGame() {
  word = randomWord();
  console.log(word);
  strikes = 3;

  for (i = 1; i < 27; i++) {
    document.querySelector("#button".concat(i)).style.display = "inline";
  }

  createArray();
  document.querySelector("#newGame").style.display = "none";
  var html2 = ""; // arr.forEach(e => {
  //     html2 += `${e}`
  // })
  // root.innerHTML = html2

  for (i = 0; i < word.length; i++) {
    html2 += " _ ";
  }

  root.innerHTML = html2;
}

function createArray() {
  var clickedLetterArray = [];

  for (i = 0; i < word.length; i++) {
    if (word.charAt(i) != " ") {
      clickedLetterArray.push(" _ ");
    } else {
      clickedLetterArray.push("-");
    }
  }

  return clickedLetterArray;
}

function handleLetterClick(e) {
  // get letter clicked
  clickedLetter = e.target.dataset.letter;
  console.log(clickedLetter);
  var letterCheck = new RegExp(clickedLetter, 'gi');

  for (i = 0; i < arr.length; i++) {
    if (letterCheck.test(word.charAt(i))) {
      console.log("found");
      console.log(word);
      arr.splice(i, 1, "".concat(clickedLetter));
    } else {
      console.log(word);
      counter++;
    }
  }

  console.log(counter);
  console.log(strikes);
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

    document.querySelector("#newGame").style.display = "inline";
  }
}