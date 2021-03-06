const express = require('express')
const app = express()

app.use(express.static('public'))

app.use((req,res, next)=>{
    console.log(`someone called the server: ${req.url} `);
   
    next();
   
})

const jokes = ['Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.',
'Time waits for no man. Unless that man is Chuck Norris.',
'If you spell Chuck Norris in Scrabble, you win. Forever.',
'Chuck Norris breathes air … five times a day.',
'In the Beginning there was nothing … then Chuck Norris roundhouse kicked nothing and told it to get a job.',
'When God said, “Let there be light!” Chuck said, “Say Please.”',
'Chuck Norris has a mug of nails instead of coffee in the morning.',
'Chuck Norris’ tears cure cancer. Too bad he has never cried.']



app.get('/get-jokes',(req, res)=>{
    const random = Math.floor(Math.random() * jokes.length);

const randomJoke = jokes[random];
console.log(randomJoke)
    res.send({randomJoke})
})

const port = 3000;
app.listen(port,()=>{
console.log('server is lisining',port)

})