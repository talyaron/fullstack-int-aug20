const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
app.use(cookieParser())


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(port)
})
