const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

const hatearray = ['vilence','eggplant','higts'];
const lovearray = ['movis','tv shows','books']

let h = hatearray;
let l = lovearray;

if(argv.h){
    h = argv.h
}

if(argv.l){
    l = argv.l
}

console.log(argv.h)