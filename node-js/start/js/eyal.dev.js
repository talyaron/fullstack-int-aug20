"use strict";

/* to start enter: node eyal -a=10 -b=10 -p=/ */
var yargs = require('yargs/yargs');

var _require = require('yargs/helpers'),
    hideBin = _require.hideBin;

var argv = yargs(hideBin(process.argv)).argv;
var a = 1,
    b = 1,
    p = "add";

function multiplication(a, b) {
  return a * b;
}

function increase(a, b) {
  return a + b;
}

function deduction(a, b) {
  return a - b;
}

function Division(a, b) {
  return a / b;
}

function start(a, b, p) {
  switch (p) {
    case '+':
      return increase(a, b);
      break;

    case '-':
      return deduction(a, b);
      break;

    case '*':
      return multiplication(a, b);
      break;

    case '/':
      return Division(a, b);
      break;

    default:
      return increase(a, b);
  }
}

var unsure = start(argv.a, argv.b, argv.p);
console.log("the answer for the numbers is : a ".concat(argv.p, " b"));
console.log("the answer for the numbers is : ".concat(argv.a, "  ").concat(argv.p, " ").concat(argv.b, " = ").concat(unsure));
/* 
    start(a,b);
    console.log(argv) */