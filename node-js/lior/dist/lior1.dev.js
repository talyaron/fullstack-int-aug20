"use strict";

var yargs = require('yargs/yargs');

var _require = require('yargs/helpers'),
    hideBin = _require.hideBin;

var argv = yargs(hideBin(process.argv)).argv;
var hatearray = ['vilence', 'eggplant', 'higts'];
var lovearray = ['movis', 'tv shows', 'books'];
var h = hatearray;
var l = lovearray;

if (argv.h) {
  h = argv.h;
}

if (argv.l) {
  l = argv.l;
}

console.log(argv.h);