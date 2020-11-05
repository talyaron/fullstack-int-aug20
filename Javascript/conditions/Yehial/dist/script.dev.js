"use strict";

var drinks = [{
  name: 'cola',
  taste: 'nice',
  caloris: 150
}, {
  name: 'fanta',
  taste: 'good',
  caloris: 120
}, {
  name: 'grape',
  taste: 'baaaa',
  caloris: 90
}, {
  name: 'cola',
  taste: 'nice',
  caloris: 200
}];

for (var _i = 0, _drinks = drinks; _i < _drinks.length; _i++) {
  var i = _drinks[_i];

  switch (i.caloris) {
    case 150:
      {
        console.log(i.taste);
      }
      break;

    case 120:
      {
        console.log(i.taste);
      }
      break;

    case 90:
      {
        console.log(i.taste);
      }
      break;

    case 200:
      {
        console.log(i.taste);
      }
      break;
  }
}