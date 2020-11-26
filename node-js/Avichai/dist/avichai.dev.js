"use strict";

var dayjs = require('dayjs');

dayjs().format;

var yargs = require('yargs/yargs');

var _require = require('yargs/helpers'),
    hideBin = _require.hideBin;

var argv = yargs(hideBin(process.argv)).argv;
var m = 1,
    d = 1,
    y = 2000,
    a = 1;
console.log(argv);

if (argv.a) {
  a = argv.a;
}

if (argv.m) {
  m = argv.m;
}

if (argv.y) {
  d = argv.d;
}

if (argv.y) {
  y = argv.y;
}

var x = dayjs("".concat(m, "-").concat(d, "-").concat(y)).add(a, 'year').format('DD/MM/YYYY');
var love = [];
var hate = [];

if (argv.h) {
  for (i = 0; i < argv._.length; i++) {
    hate.push(argv._[i]);
  }

  console.log(hate);
}

if (argv.l) {
  for (i = 0; i < argv._.length; i++) {
    love.push(argv._[i]);
  }

  console.log(love);
}