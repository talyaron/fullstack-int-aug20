
const express = require('express')
const moment = require('moment')
const app = express();




app.use(express.static('public')); 

app.get('/get-joke',(req, res)=>{
    let jokes = ['I was wondering why the baseball was getting bigger. Then it hit me.','My dolphin puns are terrible on porpoise.','Whats brown and sticky? A stick.','Orions Belt is a huge waist of space.','What did the grape say when it was stepped on? Nothing, it just let out a little wine.','Found out I was color blind the other day. That one came right out of the orange.','When my son told me to stop impersonating a flamingo, I had to put my foot down.','Why is it always hot in the corner of a room? Because a corner is 90 degrees.']
    
    let joke = jokes[Math.floor(Math.random() * 8)]
    let n =moment().format('MMMM Do YYYY, h:mm:ss a')
    res.send({joke})
    
     
})
const port = 3000;
app.listen(port, ()=>{console.log('server listen on port', port)})