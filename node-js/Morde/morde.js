const yargs = require('yargs/yargs')
const { hideBin } = require('../start/Morde/node_modules/yargs/helpers');
const { number } = require('yargs');
const argv = yargs(hideBin(process.argv)).argv

const arrayLove = ["Basketball","Sony Playstation","Hamburger","Movies"];
const arrayHate = ["Talk while I eat","Nuts","Rude people"];


if(argv.l){
    console.log(arrayLove)
}

if(argv.h){
    console.log(arrayHate)
}

if(argv.add){
    var sumNumbers = argv.add.reduce((a,b)=>{return a+b},0)
    console.log('The sum of those numbers is:',sumNumbers)
}

if(argv.mul){
    let multiplier = 1;
    for(i=0;i<argv.mul.length;i++){
        multiplier = multiplier * argv.mul[i];
    }
    console.log('The answer is:', multiplier);
}

