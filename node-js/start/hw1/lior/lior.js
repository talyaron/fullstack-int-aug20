const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const { add } = require('mathjs')
const { multiply } = require('mathjs')

// import {
//     add
//   } from 'mathjs'

let a = 8, b = 84, c = 458;

if(argv.a){
  console.log(argv.a)
  a = argv.a
}



if (argv.x) {
  console.log(add(a, b, c))
}

if (argv.y) {
  console.log(multiply(a, b, c))
}
console.log(argv.x)