"use strict";

// let testEventDiv =document.getElementById("testBox");
// console.log(testEventDiv);
// let config='width:800px;height:800px;';
// testEventDiv.addEventListener('click',(event)=>{
//     console.log(event);
//     event.target.style=config;
// })
//Forms
var boxHtml = document.getElementById('testBox');
console.log(boxHtml);
var test = '';
var nameInputFromUser = document.getElementById("inputName");
var surnameInputFormUser = document.getElementById("inputSurname");

function handleInputName(e) {
  // console.log(e.target.value);
  test += e.target.value + ' ';
  console.log(test);
}

function handleInputSurname(e) {
  test += e.target.value;
  console.log(test);
}

function addUserFunc() {
  console.log(test);
  boxHtml.innerHTML += "<div>".concat(test, "</div>");
  test = '';
}