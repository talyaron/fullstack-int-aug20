const express = require('express')
const app = express()
app.use(express.static('public'))

let jokes = [
	"The H in 'PROGRAMMING' stands for happiness",
	"2b||!2b",
	"There are 10 types of people in this world. </br>Those that know binary and those that don’t",
    "How many programmers does it take to change a light bulb? - None, that’s a hardware problem",
    "If you start to drive a fly off the monitor with the mouse cursor, it's time to shut down the computer.",
	
]

let joke

app.use((req, res, next) => {
    console.log(`${joke}`);
    next()

})

    
app.get('/randomJoke',(req, res)=>{
    joke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send({joke})
    
})


const port = 8080
app.listen(port, () => {
    console.log('listen on port 8080')

})