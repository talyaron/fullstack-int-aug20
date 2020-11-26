const dayjs = require('dayjs');

let x = dayjs().add(1, 'year').format('DD/MM/YYYY')
console.log(`${x}`)