const carName = "Suzuki Baleno"
const speed = 240;
const price = 150000;
const year = 2020;
const color = "white";

const myCar = {
    name : carName,
    speed : speed,
    price : price,
    year : year,
    color : color
}

const cars = [];

cars.push(myCar);

myCar = {
    name : "Porche Carrera",
    speed : 320,
    price : 250000,
    year : 2020,
    color : "black"
}

cars.push(myCar);
console.log(cars)

