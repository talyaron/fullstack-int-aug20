const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const arrayLove = ["Basketball","Sony Playstation","Hamburger","Movies"];
const arrayHate = ["Talk while I eat","Nuts","Rude people"];

if(argv.l && argv.h){
    console.log(arrayLove)
    console.log(arrayHate)
}


