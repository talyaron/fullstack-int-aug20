const express = require('express')
const app = express();

app.use(express.static('public'))

const useres = [{name:'lior',code:'1111'},
{name:'moran',code:'2222'},
{name:'gilad',code:'3333'},
{name:'cherut',code:'4444'},
{name:'olga',code:'5555'}]


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)})