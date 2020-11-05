"use strict";

function headphones(brand, model, type, wireless, anc, waterproof, price) {
  this.brand = brand;
  this.model = model;
  this.type = type;
  this.wireless = wireless;
  this.anc = anc;
  this.waterproof = waterproof;
  this.price = price;
}

var qc35 = new headphones('bose', 'qc35', 'headphones', true, true, false, 1000);
var xm4 = new headphones('sony', 'xm4', 'headphones', true, true, false, 1200);
var qcEarbuds = new headphones('bose', 'QcEarbuds', 'earbuds', true, true, true, 900);
var wfxm3 = new headphones('sony', 'wfxm3', 'earbuds', true, true, false, 800);
headphonesArr = [qc35, xm4, qcEarbuds, wfxm3];
var root = document.getElementById('root');

function filterPrice() {
  var html = "";

  for (var i = 0; i < 4; i++) {
    if (headphonesArr[i].price < 1000) {
      html += "<p> Brand: ".concat(headphonesArr[i].brand, " | Model: ").concat(headphonesArr[i].model, " | type: ").concat(headphonesArr[i].type, " | wireless: ").concat(headphonesArr[i].wireless, " | anc: ").concat(headphonesArr[i].anc, " | waterpfoof: ").concat(headphonesArr[i].waterproof, " | price: ").concat(headphonesArr[i].price, " </p>");
    }

    root.innerHTML = html;
  }
}

function filterBose() {
  var html = "";
  headphonesArr.forEach(function (headphone) {
    if (headphone.brand == 'bose') {
      html += "<p> Brand: ".concat(headphone.brand, " | Model: ").concat(headphone.model, " | type: ").concat(headphone.type, " | wireless: ").concat(headphone.wireless, " | anc: ").concat(headphone.anc, " | waterpfoof: ").concat(headphone.waterproof, " | price: ").concat(headphone.price, " </p>");
    }
  });
  root.innerHTML = html;
}

function filterSony() {
  var html = "";

  for (var i = 0; i < 4; i++) {
    if (headphonesArr[i].brand == 'sony') {
      html += "<p> Brand: ".concat(headphonesArr[i].brand, " | Model: ").concat(headphonesArr[i].model, " | type: ").concat(headphonesArr[i].type, " | wireless: ").concat(headphonesArr[i].wireless, " | anc: ").concat(headphonesArr[i].anc, " | waterpfoof: ").concat(headphonesArr[i].waterproof, " | price: ").concat(headphonesArr[i].price, " </p>");
    }

    root.innerHTML = html;
  }
}

function filterNone() {
  var html = "";

  for (var i = 0; i < 4; i++) {
    if (true) {
      html += "<p> Brand: ".concat(headphonesArr[i].brand, " | Model: ").concat(headphonesArr[i].model, " | type: ").concat(headphonesArr[i].type, " | wireless: ").concat(headphonesArr[i].wireless, " | anc: ").concat(headphonesArr[i].anc, " | waterpfoof: ").concat(headphonesArr[i].waterproof, " | price: ").concat(headphonesArr[i].price, " </p>");
    }

    root.innerHTML = html;
  }
}