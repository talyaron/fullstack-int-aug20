"use strict";

var yargs = require('yargs/yargs');

var _require = require('yargs/helpers'),
    hideBin = _require.hideBin;

var argv = yargs(hideBin(process.argv)).argv;
var multply;

if (argv.x && argv.y) {
  mmultply = argv.x * argv.y;
  console.log(multply);
}