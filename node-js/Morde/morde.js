const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
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
    console.log(sumNumbers)
}

if(argv.mul){
    let multiplier = 1;
    for(var i=0;i<argv.mul.length;i++){
        multiplier = multiplier * argv.mul[i];
    }
    return console.log(multiplier);
}

