const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const { add } = require('mathjs')
const { multiply } = require('mathjs')

// import {
//     add
//   } from 'mathjs'

  let a=8 , b=84 , c=458;

if(argv.x){
    math.add(a,b,c)
}

if(argv.y){
    math.multiply(a,b,c)
}
console.log(argv.x)