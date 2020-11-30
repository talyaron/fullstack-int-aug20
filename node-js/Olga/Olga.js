console.log('Hi')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let a=1, b=2, c=5
if(argv.a){
    a=argv.a
}

if(argv.b){
    b=argv.b
}

if(argv.c){
    c=argv.c
}
let x = a*b*c
console.log(x)