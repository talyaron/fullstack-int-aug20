const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

const hatearray = ['vilence','eggplant','higts'];
const lovearray = ['movis','tv shows','books']

if(argv.h){
    console.log(hatearray)
}

if(argv.l){
    console.log(lovearray)
}

