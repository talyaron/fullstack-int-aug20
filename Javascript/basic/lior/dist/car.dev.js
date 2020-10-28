"use strict";

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
/*const car1= {
   speed: "210km",
   price: "15000$",
   year: "2015",
   color: "white",
   hand: "2" ,
   src : "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
   };
   
   const speed = document.getElementById('speed')
   const price = document.getElementById('price')
   const year = document.getElementById('year')
   const color = document.getElementById('color')
   const hand = document.getElementById('hand')
   let image = document.getElementById('carpic')
   console.dir(image) 
   image.src = car.src ;
   speed.innerText = `speed: ${car1.speed}`
   price.innerText = `price: ${car1.price}`
   year.innerText = `year: ${car1.year}`
   color.innerText = `color: ${car1.color}`
   hand.innerText = `hand: ${car1.hand}` */

var car1 = ['car'];
console.log(car1);