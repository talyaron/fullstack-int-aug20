"use strict";

function vat1(itemPraice, VatRet) {
  return itemPraice * (1 + VatRet / 100);
}

var vat2 = function vat2(itemPraice, VatRet) {
  return itemPraice * (1 + VatRet / 100);
};

var vat3 = function vat3(itemPraice, VatRet) {
  return itemPraice * (1 + VatRet / 100);
};

var vat4 = function vat4(itemPraice, VatRet) {
  return itemPraice * (1 + VatRet / 100);
};

console.log(vat1(100, 17));
console.log(vat2(100, 17));
console.log(vat3(100, 17));
console.log(vat4(100, 17));