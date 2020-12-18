const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
app.use(cookieParser())
const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.post("/send-login" ,(req, res)=>{
    console.log(req.body)
    
    res.send({
        ok:true
    })
})

app.use(express.static("public"))

// מתחבר לכתובת
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(port)
})

