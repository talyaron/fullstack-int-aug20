const express = require('express')
const app = express();

const jokesArray = [`Why do we tell actors to "break a leg?"
Because every play has a cast.`,`Helvetica and Times New Roman walk into a bar.
“Get out of here!” shouts the bartender. We don’t serve your type.`,`Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”`,`Hear about the new restaurant called Karma?
There’s no menu: You get what you deserve.`,`Did you hear about the actor who fell through the floorboards?
He was just going through a stage.`,`Did you hear about the claustrophobic astronaut?
He just needed a little space.`,`Why don’t scientists trust atoms?
Because they make up everything.`,`How do you drown a hipster?
Throw him in the mainstream.`,`Why can’t you explain puns to kleptomaniacs?
They always take things literally.`,`A man tells his doctor, “Doc, help me. I’m addicted to Twitter!”
The doctor replies, “Sorry, I don’t follow you …”`]

app.use(express.static('public'));

app.get('/getjokes',(req, res)=>{
    res.send({jokesArray})
})

const port = 3000;
app.listen(port, ()=>{console.log('server listen on port', port)})