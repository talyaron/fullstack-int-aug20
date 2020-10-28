/*set information about your car (speed, price, year, etc)
1) in plain (primitives) variables*/

let name = 'Hyundai i20'
let year = '2013'
let topSpeed = '157'
let shade = 'bronze'
let price = '25000'

//2) in an object

let car = {
    name: 'Hyundai i20',
    year:'2013',
    topSpead: '157',
    shade: 'bronze',
    price: '25000'
}
   

//3) set the obj to an array cars[0]
let cars = []
cars.push(car)

//4) change your car to a better car in the same variables

/*car = {
    name: 'Honda CR-V',
    year:'2016',
    topSpead: '195',
    shade: 'Titanium Metallic',
    price: '90000'
}*/
    car.name = 'Honda CR-V';
    car.year = '2016',
    car.topSpead = '195',
    car.shade = 'Titanium Metallic',
    car.price = '90000'

//5) change the object to the new car,
   newCar = car

//6) save the obj to the cars array in location 1
cars.push(newCar)
/*7) print (console.log) the array cars. what happens?*/

console.log(cars)
