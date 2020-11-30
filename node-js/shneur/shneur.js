const yargs = require('yargs/yargs')
const {
    hideBin
} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let num1 = argv.n1
let num2 = argv.n2
let simbol = argv.s

let resulet = num1 + simbol + num2

let resulet1 = num1 + num2


console.log(`resulet of multipling is ${resulet}`)
console.log(`resulet of adding is ${resulet1}`)



// name = "shneur"
// let x = dayjs().add(1, 'year')

// let year = 1996
// console.log(`${x}its ${name} 
// and my age is ${2020 - year} 
// it is always changeing, so keep up`)
//  if (argv.a){

//     console.log("you choose the h");

//  }
// const loved = [{
//     one: "gageets"
// }, {
//     one: "greenEnergy"
// }, {
//     one: "sinece"
// },]
// const hated = ["politics", "terorisem", "shoping"]
// if (argv.l) {

//     console.log(loved[2].one);

// }
// if (argv.h) {

//     console.log(hated);

// }