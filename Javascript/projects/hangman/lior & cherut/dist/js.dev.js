"use strict";

var words = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom'];
var chosenWord = Math.floor(Math.random() * words.length);
chosenWord = words[chosenWord];
var alfabeta = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var root = document.querySelector('#root');
var html = '';
alfabeta.forEach(function (sign) {
  html += "<button class='button' data-sign=\"".concat(sign, "\">").concat(sign, "</button>");
});
root.innerHTML += "<div id='buttons'>".concat(html, "</div>");
console.log(chosenWord);
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
ctx2.lineWidth = 2;
var letters = document.querySelector('#letters');
var html2 = '';

for (var i = 0; i < chosenWord.length; i++) {
  var letter = chosenWord.charAt(i);
  html2 += "<div class='".concat(letter, "'></div>");
}

letters.innerHTML = html2;
var fanctions = [click1, click2, click3, click4, click5, click6, click7, click8, click9];
var nam = 0;
var winner = 0;
var gameover;
var win;
var yes;
var no;
var winlose = document.querySelector('#winlose');
var buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  var clickLater = button.dataset.sign;
  button.addEventListener('click', function (filterLeter) {
    //let searchTerm = clickLater.target.value
    var regSearchTerm = new RegExp(clickLater, 'g');

    if (regSearchTerm.test(chosenWord)) {
      var corectLetter = document.querySelectorAll(".".concat(clickLater));
      corectLetter.forEach(function (elm) {
        elm.innerHTML = "<h1>".concat(clickLater, "</h1>");
        yes = document.createElement("audio");
        yes.src = "yes.mp3";
        console.log(yes);
        yes.play();
        yes.volume = 0.2;
        buttons.forEach(function (button) {
          if (button.dataset.sign == clickLater) {
            button.style.visibility = 'hidden';
          }
        });
        winner++;

        if (winner == chosenWord.length) {
          console.log('you win');
          winlose.innerHTML += '<h1 id="win">you win!!</h1>';
          win = document.createElement("audio");
          win.src = "win.mp3";
          console.log(win);
          win.play();
          buttons.forEach(function (button) {
            button.disabled = true;
          });
        }
      });
    } else {
      console.log("no");
      no = document.createElement("audio");
      no.src = "no.mp3"; // no.play();

      no.volume = 0.03;
      buttons.forEach(function (button) {
        if (button.dataset.sign == clickLater) {
          // button.style.display = 'none';
          button.style.visibility = 'hidden';
        }
      });

      if (nam <= 7) {
        console.log(nam);
        fanctions[nam]();
        nam++;
      } else if (nam == 8) {
        fanctions[nam]();
        gameover = document.createElement("audio");
        gameover.src = "gameover.mp3";
        console.log(gameover);
        gameover.play();
        gameover.volume = 0.5;
        winlose.innerHTML += "<h1 id=\"lose\">you lose :(</h1>";
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      }
    }
  });
});

function click1() {
  ctx.beginPath();
  ctx.moveTo(130, 340);
  ctx.lineTo(350, 340);
  ctx.lineTo(340, 360);
  ctx.lineTo(100, 365);
  ctx.lineTo(130, 340);
  ctx.stroke();
  ctx.fill();
}

function click2() {
  ctx.beginPath();
  ctx.moveTo(290, 349);
  ctx.lineTo(305, 30);
  ctx.lineTo(320, 40);
  ctx.lineTo(295, 349);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(305, 30);
  ctx.lineTo(200, 30);
  ctx.lineTo(320, 40);
  ctx.lineTo(295, 349);
  ctx.stroke();
}

function click3() {
  ctx.beginPath();
  ctx.moveTo(315, 100);
  ctx.lineTo(250, 35);
  ctx.lineTo(270, 35);
  ctx.lineTo(317, 85);
  ctx.stroke();
}

function click4() {
  ctx.beginPath();
  ctx.moveTo(200, 30);
  ctx.lineTo(200, 70);
  ctx.stroke();
  ctx.fill();
}

function click5() {
  ctx.beginPath();
  ctx.arc(200, 100, 30, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(210, 70);
  ctx.lineTo(150, 65);
  ctx.stroke();
  ctx.moveTo(210, 70);
  ctx.lineTo(160, 60);
  ctx.stroke();
  ctx.moveTo(210, 70);
  ctx.lineTo(170, 55);
  ctx.stroke();
  ctx.moveTo(210, 70);
  ctx.lineTo(160, 72);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(205, 88, 25, 130, 0 * Math.PI);
  ctx.stroke();
}

function click6() {
  ctx.beginPath();
  ctx.moveTo(200, 130);
  ctx.lineTo(200, 200);
  ctx.stroke();
}

function click7() {
  ctx.beginPath();
  ctx.moveTo(235, 270);
  ctx.lineTo(200, 200);
  ctx.lineTo(165, 270);
  ctx.stroke();
}

function click8() {
  ctx.beginPath();
  ctx.moveTo(155, 200);
  ctx.lineTo(200, 155);
  ctx.lineTo(245, 200);
  ctx.stroke();
}

function click9() {
  // root.innerHTML += '<h1 id="lose">you lose :(</h1>';
  console.log('מוות');
  ctx.beginPath();
  ctx.arc(190, 95, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(210, 95, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(210, 112);
  ctx.lineTo(190, 115);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(195, 115, 5, 0, 1 * Math.PI);
  ctx.stroke(); //  c.style.backgroundColor = 'red';

  c.style.animation = 'shake 0.5s';
  c.style.animatioIiterationCount = 'infinite';
}