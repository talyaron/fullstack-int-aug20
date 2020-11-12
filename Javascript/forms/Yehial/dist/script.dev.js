"use strict";

var theBox = document.getElementById("mainDiv");
console.log(theBox);

function colorChangeFunc(event) {
  event.preventDefault();
  var color = document.getElementById("inputColorFromUser").value;
  colorConfig = color;
  theBox.style.background = "".concat(color);
}

var rightUserName = 'Yehial';
var rightPassword = '145236';

function userNameAndPasswordCheck(event) {
  event.preventDefault();
  var userNameInput = document.getElementById("userNameInput").value;
  var userPassword = document.getElementById("userPassword").value;

  if (rightPassword == userPassword && rightUserName == userNameInput) {
    var tag = document.getElementById("userInterFace");
    tag.innerHTML = '';
    tag.innerHTML += '--------Access Granted-----------';
    console.log(tag);
  } else {
    var _tag = document.getElementById("userInterFace");

    _tag.innerHTML = '';
    _tag.innerHTML += '--------Access Denied-----------';
    console.log('no');
  }
}