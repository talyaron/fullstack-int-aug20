// 1) in plain (primitives) variables

let maker = 'TOYOTA'
let yearOfIssue = '2012'
let color = 'white'
let price = 35000;

console.log(maker,yearOfIssue,color,price);

// 2) in an object

const MyCar = {maker:maker,
  yearOfIssue:yearOfIssue,
  color:color,
  price:price
}

console.log(MyCar);

// 3) set the obj to an array cars[0]

const cars = [];
cars[0] = MyCar;

console.log(cars);

// 4) change your car to a better car in the same variables

maker = 'MAZDA'
yearOfIssue = '2018'
color = 'bule'
price = 25000;

console.log(maker,yearOfIssue,color,price);
console.log(MyCar);
// console.log(cars);

// 5) change the object to the new car,
MyCar.maker = maker;
MyCar.yearOfIssue = yearOfIssue;
MyCar.color = color;
MyCar.price = price;

console.log(MyCar);
console.log(cars);

// 6) save the obj to the cars array in location 1

cars[1] = MyCar;

// 7) print (console.log) the array cars. what happens?

console.log(cars);