"use strict";

function handleClick(e) {
  console.log(e.target.dataset.color);
  var color = e.target.dataset.color;

  if (color == 'blue') {
    document.querySelector('.lowerBox').innerHTML += "<div id=\"blue\"></div>";
  } else if (color == 'green') {
    document.querySelector('.lowerBox').innerHTML += "<div id=\"green\"></div>";
  } else if (color == 'orange') {
    document.querySelector('.lowerBox').innerHTML += "<div id=\"orange\"></div>";
  } else if (color == 'gray') {
    document.querySelector('.lowerBox').innerHTML += "<div id=\"gray\"></div>";
  }
}