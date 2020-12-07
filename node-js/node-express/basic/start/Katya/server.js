const express = require('express') //ספריית express
const app = express();

let numberOfDogs = 3;

//midleware
app.use((req, res, next) => {
    console.log(`someone called the server: ${req.url} and I have ${numberOfDogs} dogs`)
    next()
})

app.use(express.static('public')) //ניתן לתת שם לתיקיה שרוצים, נהוג לתת שם פאבליק..צריך לשים בפאבליק בשביל שלא יהיה ניתן להגיע לשרת
    //אם נרשום בlocalhost:3000/secret.html נוכל לראות את הקובץ שיש בתיקיה





app.get('/get-number-of-dogs', (req, res) => { //the server response to tthe client
    res.send({ numberOfDogs })
    numberOfDogs++
})


const port = 3000; //מה מספר הפורט
app.listen(port, () => { console.log('server epta', port) }) //מוודאים שמאזין