"use strict";

var Rivka = {
  name: 'Rivka',
  age: 13,
  imgsrc: '<img src="img/1.jpg">'
};
var Nehonya = {
  name: 'Nehonya',
  age: 11,
  imgsrc: '<img src="img/2.jpg">'
};
var Cherut = {
  name: 'Cherut',
  age: 9,
  imgsrc: '<img src="img/3.jpg">'
};
var Nachshon = {
  name: 'Nachshon',
  age: 7,
  imgsrc: '<img src="img/4.jpg">'
};
var Tzurishaday = {
  name: 'Tzurishaday',
  age: 6,
  imgsrc: '<img src="img/5.jpg">'
};
var Kalev = {
  name: 'Kalev',
  age: 5,
  imgsrc: '<img src="img/6.jpg">'
};
var Moshe = {
  name: 'Moshe',
  age: 3,
  imgsrc: '<img src="img/7.jpg">'
};
var ShvutAmi = {
  name: 'Shvut Ami',
  age: 1,
  imgsrc: '<img src="img/8.jpg">'
};
var myChildren = [Rivka, Nehonya, Cherut, Nachshon, Tzurishaday, Kalev, Moshe, ShvutAmi];
var root = document.getElementById('root');
console.log(myChildren);
root.innerHTML += "<h1> MY CHILDREN";

for (var _i = 0, _myChildren = myChildren; _i < _myChildren.length; _i++) {
  var i = _myChildren[_i];

  if (i.age > 6) {
    root.innerHTML += "<h2>".concat(i.imgsrc).concat(i.name, " is ").concat(i.age, " years old  </h2>");
  } else if (i.age == 6) {
    root.innerHTML += "<h2>".concat(i.imgsrc).concat(i.name, " is ").concat(i.age, " years old right now</h2>");
    root.innerHTML += 'the athers are below 6';
  }
}