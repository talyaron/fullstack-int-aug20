const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(' Enter a value for --n1= --n2= through the cli interface to sum them up')

let sum;
if(argv.n1 && argv.n2){
  sum = argv.n1 + argv.n2;
}
console.log(sum);