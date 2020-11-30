"use strict";

console.log('Hi');

var yargs = require('yargs/yargs');

var _require = require('yargs/helpers'),
    hideBin = _require.hideBin;

var argv = yargs(hideBin(process.argv)).argv;
var a = 1,
    b = 2,
    c = 5;

if (argv.a) {
  a = argv.a;
}

if (argv.b) {
  b = argv.b;
}

if (argv.c) {
  c = argv.c;
}

var x = a * b * c;
console.log(x);