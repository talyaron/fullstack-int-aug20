"use strict";

var cars = [];
var vehicle = {
  brend: 'citroen',
  speed: 180,
  price: 20000,
  year: 2007,
  color: "white"
};
cars[0] = vehicle; // console.log(cars)

vehicle = {
  brend: 'tesla',
  speed: 300,
  price: 200000,
  year: 2021,
  color: "black"
};
cars[1] = vehicle;
console.log(cars);