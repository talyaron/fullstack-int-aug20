"use strict";

//1
function vatRegular(price) {
  return price * 0.17;
}

var priceR = 100;
var priceRegular = vatRegular(priceR);
console.log(priceRegular);

function priceCandleFive() {
  document.getElementById('textChangeFive').innerHTML = 'The price is ' + priceR;
  document.getElementById('textChangeFive').style.color = 'green';
}

function vatCandleFive() {
  document.getElementById('textChangeVatFive').innerHTML = 'The vat is ' + priceRegular;
  document.getElementById('textChangeVatFive').style.color = 'red';
} //2


var vatAnonymous = function vatAnonymous(price) {
  return price * 0.17;
};

priceAn = 165;
var PriceAnonymous = vatAnonymous(priceAn);
console.log(PriceAnonymous);

function priceCandleThree() {
  document.getElementById('textChangeThree').innerHTML = 'The price is ' + priceAn;
  document.getElementById('textChangeThree').style.color = 'green';
}

function vatCandleThree() {
  document.getElementById('textChangeVatThree').innerHTML = 'The vat is ' + PriceAnonymous;
  document.getElementById('textChangeVatThree').style.color = 'red';
} //3


var vatArrow = function vatArrow(price) {
  return price * 0.17;
};

priceAr = 250;
var priceArrow = vatArrow(priceAr);
console.log(priceArrow);

function priceCandleRGB() {
  document.getElementById('textChangeRGB').innerHTML = 'The price is ' + priceAr;
  document.getElementById('textChangeRGB').style.color = 'green';
}

function vatCandleRGB() {
  document.getElementById('textChangeVatRGB').innerHTML = 'The vat is ' + priceArrow;
  document.getElementById('textChangeVatRGB').style.color = 'red';
}