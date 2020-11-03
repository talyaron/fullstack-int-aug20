"use strict";

var Rivka = {
  name: 'Rivka',
  age: 13
};
var Nehonya = {
  name: 'Nehonya',
  age: 11
};
var Cherut = {
  name: 'Cherut',
  age: 9
};
var Nachshon = {
  name: 'Nachshon',
  age: 7
};
var Tzurishaday = {
  name: 'Tzurishaday',
  age: 6
};
var Kalev = {
  name: 'Kalev',
  age: 5
};
var Moshe = {
  name: 'Moshe',
  age: 3
};
var ShvutAmi = {
  name: 'Shvut Ami',
  age: 1
};
var myChildren = [Rivka, Nehonya, Cherut, Nachshon, Tzurishaday, Kalev, Moshe, ShvutAmi];
var root = document.getElementById('root');
console.log(myChildren);

for (var _i = 0, _myChildren = myChildren; _i < _myChildren.length; _i++) {
  var i = _myChildren[_i];

  if (i.age > 6) {
    root.innerHTML += "<h2>".concat(i.name, " is ").concat(i.age, " years old </h2>");
  } else if (i.age == 6) {
    root.innerHTML += "<h2>".concat(i.name, " is ").concat(i.age, " years old right now</h2>");
    root.innerHTML += 'the athers are below 6';
  }
}