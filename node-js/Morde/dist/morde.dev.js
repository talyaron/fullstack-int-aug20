"use strict";

var yargs = require('yargs/yargs');

var _require = require('../start/Morde/node_modules/yargs/helpers'),
    hideBin = _require.hideBin;

var _require2 = require('yargs'),
    number = _require2.number;

var argv = yargs(hideBin(process.argv)).argv;
var arrayLove = ["Basketball", "Sony Playstation", "Hamburger", "Movies"];
var arrayHate = ["Talk while I eat", "Nuts", "Rude people"];

if (argv.l) {
  console.log(arrayLove);
}

if (argv.h) {
  console.log(arrayHate);
}

if (argv.add) {
  var sumNumbers = argv.add.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log('The sum of those numbers is:', sumNumbers);
}

if (argv.mul) {
  var multiplier = 1;

  for (i = 0; i < argv.mul.length; i++) {
    multiplier = multiplier * argv.mul[i];
  }

  console.log('The answer is:', multiplier);
}