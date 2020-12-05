const express = require('express')
const app = express()

app.use(express.static('public'))

app.use((req,res, next)=>{
    console.log(`someone called the server: ${req.url} `);
   
    next();
   
})

app.get('/get-jokes',(req, res)=>{
    res.send({randomJoke})
})

const port = 3000;
app.listen(port,()=>{
console.log('server is lisining',port)

})