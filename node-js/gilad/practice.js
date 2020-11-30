const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
let hatedthings=['cheing gum', 'kinua','ect...' ]
console.log(hatedthings)
 

let lovedThings= []  = argv.l

console.log(lovedThings)
