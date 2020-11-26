const dayjs = require('dayjs')
dayjs().format
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let m = 1, d = 1, y = 2000, a = 1;

console.log(argv)

if (argv.a) {
    a = argv.a
}
if (argv.m) {
    m = argv.m
}
if (argv.y) {
    d = argv.d
}
if (argv.y) {
    y = argv.y
}
let x = dayjs(`${m}-${d}-${y}`).add(a, 'year').format('DD/MM/YYYY')


const love = []
const hate = []

if (argv.h) {
    for (i = 0; i < argv._.length; i++) {
        hate.push(argv._[i])
    }
    console.log(hate)
}
if (argv.l) {
    for (i = 0; i < argv._.length; i++) {
        love.push(argv._[i])
    }
    console.log(love)
}