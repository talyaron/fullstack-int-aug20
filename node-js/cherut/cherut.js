const dayjs = require('dayjs');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv)

let x = dayjs().format('DD/MM/YYYY');
console.log(x)

let yearOfBirdth = 1998;
let date = new Date();
let currentYear = date.getFullYear();
console.log(currentYear - yearOfBirdth)
