const express = require('express')
const app = express()
app.use(express.static('public'))



let timeSinceRefresh = 1

app.use((req, res, next) => {
    console.log(`you have loged to this website ${timeSinceRefresh} seconds ago`);
    next()

})

app.get('/timeSinceRefresh',(req, res)=>{
    res.send({timeSinceRefresh})
    timeSinceRefresh++
})




const port = 3000
app.listen(port, () => {
    console.log(`you have loged to this website ${timeSinceRefresh} seconds ago`)

})