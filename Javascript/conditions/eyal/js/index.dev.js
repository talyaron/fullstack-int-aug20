"use strict";

var drinks = [{
  name: 'קולה',
  price: '6',
  currency: 'שח',
  type: 'מוגז',
  Amount: '1000'
}, {
  name: 'תפוזינה',
  price: '10',
  currency: 'שח',
  type: 'טיבעי',
  Amount: '300'
}, {
  name: 'ספריט',
  price: '5',
  currency: 'שח',
  type: 'מוגז',
  Amount: '600'
}, {
  name: 'אקסל',
  price: '3',
  currency: 'שח',
  type: 'מוגז',
  Amount: '10000'
}, {
  name: 'שוקו',
  price: '1.5',
  currency: 'שח',
  type: 'חלבי',
  Amount: '300'
}];
drinks.forEach(function (drink) {
  switch (drink) {
    case 'מוגז':
      console.log("\u05D9\u05E9 \u05E8\u05E7 ".concat(drink.price, " \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA"));
      break;

    case 'חלב':
      console.log("\u05D9\u05E9 \u05E8\u05E7 ".concat(drink.price, " \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA"));
      break;

    default:
      console.log('couldnt find the symbol');
  }
});