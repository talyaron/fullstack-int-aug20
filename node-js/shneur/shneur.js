const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv);
    
// name = "shneur"
// let x = dayjs().add(1, 'year')

// let year = 1996
// console.log(`${x}its ${name} 
// and my age is ${2020 - year} 
// it is always changeing, so keep up`)
