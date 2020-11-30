const dayjs = require('dayjs')
dayjs().format
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


let a = argv.a
let b = argv.b


function minus(a, b) {
    return a - b
}
function plus(a, b) {
    return a + b
}
function multi(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

let chosenSign = argv._[0]

if (argv.a && argv.b) {
    switch (chosenSign) {
        case "-":
            console.log(minus(a, b))
            break;
        case "+":
            console.log(plus(a, b))
            break;
        case "*":
            console.log(multi(a, b))
            break;
        case "/":
            console.log(divide(a, b))
            break;
        default: console.log("Define A + B and chose math action \nExample: -a 1 + -b 1")
    }
} else {
    console.log("Define A + B and chose math action \nExample: -a 1 + -b 1")
}
