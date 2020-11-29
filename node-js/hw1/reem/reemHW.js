const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
let multply;
if(argv.x && argv.y){
    
    mmultply=(argv.x * argv.y)
    console.log( multply)
}