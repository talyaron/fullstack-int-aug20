const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');
var cors = require('cors')


app.use(bodyParser.json())
app.use(cors());

app.use(express.static('public'))
app.use(cors());



app.use(bodyParser.json())

app.use(express.static('public'))
const hello = async (string, names) => {
    console.log('translating....');
    const stringInEnglish = await translate(string, 'iw', 'en');
    console.log(stringInEnglish + " " + names);
}


const fetch = async (url,  headers) => {
    let res;

    await fetch(url, {
        "method": "GET",
        "headers": headers
    }).then((response) => response.json({ response }))
        .then(response => {
            res = response;
        })
        .catch(err => {
            console.error(err);
        });

    return res;
}

async function translate(sentence, langFrom, langTo) {
    const url = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${langFrom}%7C${langTo}&q=${encodeURI(sentence)}&mt=1&onlyprivate=0&de=a%40b.c`;
    const host = "translated-mymemory---translation-memory.p.rapidapi.com";
    const key = "bd210f8d39mshaaa340100e6c6b5p186237jsnd44113e94e03"
    const headers = {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host,
    };

    const fetchResponse = await fetch(url, headers); 
    let translatedString = fetchResponse.responseData.translatedText;
    return translatedString;
}
const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests