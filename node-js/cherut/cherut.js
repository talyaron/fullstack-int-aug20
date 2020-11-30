// const dayjs = require('dayjs');

// let x = dayjs().format('DD/MM/YYYY');
// console.log(x)

// let yearOfBirdth = 1998;
// let date = new Date();
// let currentYear = date.getFullYear();
// console.log(currentYear - yearOfBirdth)

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let love = ['chocolate','sun', 'trail'];
let hate = ['snakes', 'red', 'shark'];

if(argv.l){
  console.log(love)
}else if(argv.h){
  console.log(hate)
} 
