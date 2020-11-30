const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
console.log(`x*y=`)
let x = argv.x
let y = argv.y
console.log(x*y)
console.log(`x+y=`)
console.log(x+y)