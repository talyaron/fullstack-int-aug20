"use strict";

var speed = "210km";
var price = "15000$";
var year = "2015";
var color = "white";
var hand = "2";
console.log(speed, price, year, color, hand);
var car = {
  speed: "210km",
  price: "15000$",
  year: "2015",
  color: "white",
  hand: "2"
};
console.log(car.speed);
console.log(car['price']);
console.log(car.year);
console.log(car['color']);
console.log(car.hand);
var cars = [car];
console.log(cars[0]);
speed = "250km";
price = "50000$";
year = "2020";
color = "black";
hand = "1";
car = {
  speed: "250km",
  price: "50000$",
  year: "2020",
  color: "black",
  hand: "1"
};
console.log(car);
cars[1] = car;
console.log(cars);