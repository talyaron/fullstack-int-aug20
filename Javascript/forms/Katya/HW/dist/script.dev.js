"use strict";

var myUserName = 'Ka';
var myPassword = 1234;

function colorChange(e) {
  var color = e.target.value;
  document.body.style.backgroundColor = "".concat(color);
  document.getElementById('mainColorLove').innerHTML = "You chose the color";
}

function chosenDate(e) {
  var dateB = e.target.value;
  document.getElementById('mainDateChosen').innerHTML = "Your birthday is " + "".concat(dateB);
}

function hobbyText(e) {
  var textvalue = e.target.value;
  document.getElementById('mainTextText').innerHTML = "Your hobbies is " + "".concat(textvalue);
}

function handleSub(e) {
  e.preventDefault();
  var usernName = e.target.children.Name.value;
  var password = e.target.children.Password.value;
  console.log(usernName, password);

  if (usernName == myUserName && password == myPassword) {
    alert('Login successfully');
  } else {
    alert('Login failed');
  }
} // function but() {
//     const x = document.getElementById('inp').value;
//     document.getElementById('mainTextText').innerHTML = "youre hobbies are " + x;
// }