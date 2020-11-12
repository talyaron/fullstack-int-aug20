"use strict";

// function buttonn3() {
//     event.preventDefault();
//     document.html.style.fontSize = "25px"
// }
function savecolor() {
  event.preventDefault();
  var color = event.target.children.color.value;
  card.style.backgroundColor = color;
}

function buttonn1() {
  event.preventDefault(); // card.style.backgroundColor = 'rgba(255, 183, 183, 0.335)'
  // card.style.boxShadow = 'none'

  none.style.display = 'block';
  block.style.display = 'none';
  boxcard.style.color = 'black';
  boxcard.style.backgroundImage = " url(img/כוכבים.jpg)";
}

function buttonn2() {
  event.preventDefault(); // box.style.backgroundColor = "rgb(255, 213, 213)"

  card.style.boxShadow = "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)";
  none.style.display = 'none';
  block.style.display = 'block';
  boxcard.style.color = 'rgb(126, 126, 126)';
  boxcard.style.backgroundImage = "url(img/רקע.jpg)";
}

var myname = 'hillel';
var myfamily = 'arouas';
var myid = 123456789;
var myDate_of_birth = 11 / 11 / 1111;
var myMobile_Phone = 12345;
var mypassword = "javascript";

function saveinformation(event) {
  event.preventDefault();
  var password = event.target.children.password.value;

  if (password == mypassword) {
    alert("הסיסמה נכונה ☻");
  } else {
    alert("סיסמה שגויה נסה שנית");
  }
}