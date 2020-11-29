const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

let loved = argv._

console.log(argv)
console.log(loved)