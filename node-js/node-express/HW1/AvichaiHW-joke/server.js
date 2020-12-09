const express = require('express')
const app = express()

let jokes = [
    {joke:"Did you hear about the actor who fell through the floorboards?",answer:"He was just going through a stage."},
    {joke:"Did you hear about the claustrophobic astronaut?",answer:"He just needed a little space."},
    {joke:"Why don’t scientists trust atoms?",answer:"Because they make up everything."},
    {joke:"Why did the chicken go to the séance?",answer:"To get to the other side."},
    {joke:"Want to hear a construction joke?",answer:"Oh never mind, I'm still working on that one."},
    {joke:"What did one plate say to his friend? ",answer:"Tonight, dinner's on me!"},
    {joke:"What is Forest Gump's password?",answer:"1Forest1."}
]
let chosenJoke;



app.use(express.static('public'))


app.get('/get-new-joke', (req, res) => {
    chosenJoke = jokes[Math.floor(Math.random() * jokes.length)]
    // console.log(chosenJoke.joke)
    // console.log(chosenJoke.answer)
    res.send({ chosenJoke })
})


const port = 3000
app.listen(port, () => { console.log(`open on ${port}`) })