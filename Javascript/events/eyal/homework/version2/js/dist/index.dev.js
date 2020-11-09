"use strict";

var _this = void 0;

var Cloun = document.querySelector('#Cloun');
var TopCover = document.querySelector('#topCover');
var box = document.querySelector('#box');
var boxButton = document.querySelector('.box');
var plane = document.querySelector('#plane');
var planeButton = document.querySelector('.plane');
/* ליצן מופיע בלחיצה על קופסא */

box.addEventListener('click', function (event1) {
  //box clicked
  console.log("box clicked");
  Cloun.style.width = "100px";
  Cloun.style.height = "100px";
  Cloun.style.transform = 'translate(0px,-100px)';
  Cloun.src = "img/clown.png";
  TopCover.style.top = "460px";
  TopCover.style.transform = "skewY(-20deg)";
  box.addEventListener('mouseleave', function (event) {
    //Box leaved
    console.log("Box leaved");
    Cloun.style.transform = 'translate(0px,20px)';
    TopCover.style.top = "495px";
    TopCover.style.transform = "skewY(0deg)";
  });
});
/* ליצן מופיע בלחיצה על מטוס */

plane.addEventListener('click', function (event1) {
  //plane clicked
  console.log("box clicked");
  Cloun.style.width = "100px";
  Cloun.style.height = "100px";
  Cloun.style.transform = 'translate(0px,-100px)';
  Cloun.src = "img/clown.png";
  TopCover.style.top = "460px";
  TopCover.style.transform = "skewY(-20deg)";
  plane.addEventListener('mouseleave', function (event) {
    //Plane leaved
    console.log("Plane leaved");
    Cloun.style.transform = 'translate(0px,20px)';
  });
});
/*   לחצנים לשינוי התצוגה */

boxButton.addEventListener('click', function (event1) {
  plane.style.display = "none";
  TopCover.style.display = "block";
  box.style.display = "block";
});
planeButton.addEventListener('click', function (event) {
  plane.style.display = "block";
  TopCover.style.display = "none";
  box.style.display = "none";
});
/*   גרירת המטוס */

var deltaX;
var deltaY;
plane.addEventListener('dragstart', function (event) {
  setTimeout(function () {
    return _this.className = 'invisible';
  }, 0);
  var position = event.target;
  console.log(position.getBoundingClientRect());
  x = position.offsetLeft;
  y = position.offsetTop;
  deltaX = event.x - x;
  deltaY = event.y - y;
  console.log(x, y);
});
plane.addEventListener('dragend', function dragStart(event) {
  this.className = 'visible';
  var position = event.target;
  plane.style.left = event.x - deltaX + 'px';
  plane.style.top = event.y - deltaY + 'px';
  Cloun.style.left = event.x + -(deltaX / 2) + 'px';
  Cloun.style.top = event.y - deltaY / 2 + 'px';
  console.log(event);
});