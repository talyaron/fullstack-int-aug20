const dayjs = require('dayjs');

let x = dayjs('1-1-1950').add(1, 'year').format('DD/MM/YYYY')
console.log(`${x}`)