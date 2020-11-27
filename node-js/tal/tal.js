const dayjs = require('dayjs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

console.log(argv);
console.log(argv._)

if(argv._.includes('hi')){
    console.log('Hi to you too')
}

let d=1, m=1, y=2000, a=1;

if(argv.y){
    y = argv.y
}

if(argv.m){
    m = argv.m
}

if(argv.d){
    d = argv.d
}

if(argv.a){
    a = argv.a
}

let x = dayjs(`${m}-${d}-${y}`).add(a, 'year').format('DD/MM/YYYY');

console.log(`${x}`);

//create a function thet gets year of birth, and return the age... console log the age;``


// create 2 arrays. one with hated thing, other with beloved thing. use yargs to print one of the arrays
// -h for hated things, -l for loved things