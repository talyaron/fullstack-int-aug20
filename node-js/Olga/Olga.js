const dayjs = require('dayjs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

console.log(argv);

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

console.log(`${d}-${m}-${y}`)

let x = dayjs(`${m}-${d}-${y}`).add(a, 'year').format('DD/MM/YYYY');

console.log(`${x}`);