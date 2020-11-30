"use strict";

var dayjs = require('dayjs');

dayjs().format;

var yargs = require('yargs/yargs');

var _require = require('yargs/helpers'),
    hideBin = _require.hideBin;

var argv = yargs(hideBin(process.argv)).argv;
var a = argv.a;
var b = argv.b;

function minus(a, b) {
  return a - b;
}

function plus(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

var chosenSign = argv._[0];

if (argv.a && argv.b) {
  switch (chosenSign) {
    case "-":
      console.log(minus(a, b));
      break;

    case "+":
      console.log(plus(a, b));
      break;

    case "*":
      console.log(multi(a, b));
      break;

    case "/":
      console.log(divide(a, b));
      break;

    default:
      console.log("Define A + B and chose math action \nExample: -a 1 + -b 1");
  }
} else {
  console.log("Define A + B and chose math action \nExample: -a 1 + -b 1");
}