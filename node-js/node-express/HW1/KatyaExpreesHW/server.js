//1 - npm init --y
//2 - npm i express
//3 - cmd - because it will be powershell
//4 - port=3000;- nevermind which number it will be
//5 - app.listen - to check
//6 - app.use(express.static('public')) - to use the static files like - html, css, js and else
//7 - getting in localhost:3000 in brauser
//8 - const __name__ = 'something' or 'nothing - for using in futur and put in data
//9 - in secent page - js.js



const express = require('express')
const app = express();

const port = 3000;

// let randomJokes = '' //random of jokes begin from nothing

const randomJokes = [{ title: 'a', joke: 'How many times can you subtract 10 from 100? Once. The next time you would be subtracting 10 from 90.' },
    { title: 'a', joke: 'If Monday was a movie, it would be very long and boring. No one would ever want to watch it.' },
    { title: 'a', joke: 'Monday morning…Rolling out of bed is easy. Getting up off the floor is another story.' },
    { title: 'a', joke: 'The only thing worse than Friday the 13th is Monday the 13th' },
    { title: 'a', joke: 'Did you hear about the claustrophobic astronaut? He just needed a little space.' },
    { title: 'a', joke: 'Q: Two cats of the same size slide down a roof at the same time, but one falls off first. Which one? A: The one with the smaller “mew.”' },
    { title: 'a', joke: 'Why don’t physicists date biologists? They don’t have any chemistry.' },
];

app.get('/get-jokes', (req, res) => {

    const Random = Math.floor(Math.random() * randomJokes.length)
    const ran = randomJokes[Random].joke

    res.send({ ran })

})




// const jokes = [
//     'How many times can you subtract 10 from 100? Once. The next time you would be subtracting 10 from 90.',
//     'If Monday was a movie, it would be very long and boring. No one would ever want to watch it.',
//     'Monday morning…Rolling out of bed is easy. Getting up off the floor is another story.',
//     'The only thing worse than Friday the 13th is Monday the 13th',
//     'Did you hear about the claustrophobic astronaut? He just needed a little space.',
//     'Q: Two cats of the same size slide down a roof at the same time, but one falls off first. Which one? A: The one with the smaller “mew.”',
//     'Why don’t physicists date biologists? They don’t have any chemistry.'
// ];

app.use(express.static('public'))








app.listen(port, () => {
    console.log('listen: ', port)
})