//--------------------------------------------------------------days JS-------------------------------------------------------------
const dayjs = require('dayjs');


//----------------------------------------------------------------yargs-------------------------------------------------------------
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
let d=1, m=1, y=2000, a=1;
console.log(argv)
console.log(argv._)
if(argv.y){
   y= argv.y
}

if(argv.m){
    m=argv.m
}
if(argv.d){
    d=argv.d
}
if(argv.a){
    a=argv.d
}
let x = dayjs(`${m}-${d}-${y}`).add(1, 'year').format('DD/MM/YYYY')
console.log(x)