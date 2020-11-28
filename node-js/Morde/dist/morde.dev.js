"use strict";

var yargs = require('yargs/yargs');

var _require = require('yargs/helpers'),
    hideBin = _require.hideBin;

var argv = yargs(hideBin(process.argv)).argv;
var arrayLove = ["Basketball", "Sony Playstation", "Hamburger", "Movies"];
var arrayHate = ["Talk while I eat", "Nuts", "Rude people"];

if (argv.l && argv.h) {
  console.log(arrayLove);
  console.log(arrayHate);
}