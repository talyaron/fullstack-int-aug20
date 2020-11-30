"use strict";

var dayjs = require('dayjs');

var yargs = require('yargs/yargs');

var _require = require('yargs/helpers'),
    hideBin = _require.hideBin;

var argv = yargs(hideBin(process.argv)).argv;
console.log(argv);
var d = 1,
    m = 1,
    y = 2000,
    a = 1;

if (argv.y) {
  y = argv.y;
}

if (argv.m) {
  m = argv.m;
}

if (argv.d) {
  d = argv.d;
}

if (argv.a) {
  a = argv.a;
}

console.log("".concat(d, "-").concat(m, "-").concat(y));
var x = dayjs("".concat(m, "-").concat(d, "-").concat(y)).add(a, 'year').format('DD/MM/YYYY');
console.log("".concat(x));