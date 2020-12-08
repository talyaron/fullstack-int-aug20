const express = require('express')
const app = express();

app.use(express.static('public'))

const port = 5000;


app.get('/joke', (req, res) => {
    const jokes = [
        'How many times can you subtract 10 from 100? Once. The next time you would be subtracting 10 from 90.',
        'If Monday was a movie, it would be very long and boring. No one would ever want to watch it.',
        'Monday morning…Rolling out of bed is easy. Getting up off the floor is another story.',
        'The only thing worse than Friday the 13th is Monday the 13th',
        'Did you hear about the claustrophobic astronaut? He just needed a little space.',
        'Q: Two cats of the same size slide down a roof at the same time, but one falls off first. Which one? A: The one with the smaller “mew.”',
        'Why don’t physicists date biologists? They don’t have any chemistry.'
    ];

    let Rand
    let DoCounter = 0
    do {
        DoCounter++
        Rand = Math.floor((Math.random() * jokes.length));
    } while (Rand == PrevRand);

    res.send({ Bdiha: jokes[Rand], Prev: PrevRand, DoCounter })
    PrevRand = Rand;
})








// app.use(express.static('public'));

// var getRandomJoke;
// let joke;

// function getJoke() {
//     getRandomJoke = oneLinerJoke.getRandomJoke();
//     joke = getRandomJoke.body;

// }

// getJoke();
// setInterval(getJoke, 2000);



// app.get('/get-joke', (req, res) => {
//     res.send({ joke })
// })


app.listen(port, () => {
    console.log('server listen on port', port)
})