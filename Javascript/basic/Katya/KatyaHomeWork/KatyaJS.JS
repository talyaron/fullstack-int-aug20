//1
let carname = "Renault Wind (N)"
let price = "8000EUR"
let year = "2010"
let color = "white"
let speed = "190km/h"
console.log(carname, price, year, color, speed)

//2
let car = { carname: "Renault Wind (N)", price: "8000EUR", year: "2010", color: "white", speed: "190km/h", }
console.log(car)

//3
const cars = [car]
console.log(cars[0])

//4
carname = "Porsche 911"
price = "90000USD";
year = "2020";
color = "red";
speed = "293km/h";
console.log(carname, price, year, color, speed);

//5
car = { mycar: "Porsche 911", price: "90000USD", year: "2020", color: "red", speed: '293km/h' };
console.log(car);

//6
cars[1] = car

//7
console.log(cars);

function answer1() {
    let answer1 = "Renault Wind(N) 8000E UR 2010 white 190 km / h"
    document.getElementById('one').innerHTML = answer1
}

function answer2() {
    let answer2 = 'carname: "Renault Wind (N)",color: "white",price: "8000EUR", speed: "190km/h", year: "2010"'
    document.getElementById('two').innerHTML = answer2
}

function answer3() {
    let answer3 = 'carname: "Renault Wind (N)",color: "white",price: "8000EUR", speed: "190km/h", year: "2010"'
    document.getElementById('three').innerHTML = answer3
}

function answer4() {
    let answer4 = 'Porsche 911 90000USD 2020 red 293km/h'
    document.getElementById('four').innerHTML = answer4
}

function answer5() {
    let answer5 = 'color: "red", mycar: "Porsche 911", price: "90000USD", speed: "293km/h". year: "2020"'
    document.getElementById('five').innerHTML = answer5
}

function answer6() {
    let answer6 = 'cars[1] = car'
    document.getElementById('six').innerHTML = answer6
}

function answer7() {
    let answer7 = '0:{carname: "Renault Wind (N)", price: "8000EUR", year: "2010", color: "white", speed: "190km/h"} 1: {mycar: "Porsche 911", price: "90000USD", year: "2020", color: "red", speed: "293km/h"}'
    document.getElementById('seven').innerHTML = answer7
}