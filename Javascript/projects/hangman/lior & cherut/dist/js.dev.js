"use strict";

var words = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom'];
var chosenWord = Math.floor(Math.random() * words.length);
chosenWord = words[chosenWord];
var alfabeta = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'q', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var root = document.querySelector('#root');
var html = '';
alfabeta.forEach(function (sign) {
  html += "<button class='button' data-sign=\"".concat(sign, "\">").concat(sign, "</button>");
});
root.innerHTML += html;
var letters = document.querySelector('#letters');
var html2 = '';

for (var i = 0; i < chosenWord.length; i++) {
  var letter = chosenWord.charAt(i);
  html2 += "<div id='".concat(letter, "'></div>");
}

letters.innerHTML = html2;
var buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  var clickLater = button.dataset.sign;
  button.addEventListener('click', function (filterLeter) {
    //let searchTerm = clickLater.target.value
    var regSearchTerm = new RegExp(clickLater, 'g');

    if (regSearchTerm.test(chosenWord)) {
      console.log('yes');
    } else {
      console.log("no");
    }
  }); //console.log(button.dataset.sign)
}); //function filterLeter (clickLater){
//let searchTerm = clickLater.target.value
// let regSearchTerm = new RegExp(clickLater,'g');
//if(regSearchTerm.test(chosenWord)){
//console.log('no')
//} else {
//    console.log("yes")
//}
//}