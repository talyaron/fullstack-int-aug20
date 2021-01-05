const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
const { encode, decode } = require('url-encode-decode');


const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/getLang', async (req, res) => {
  console.log('in the getLang')  
  const AllLangs = await GetLangFromAPI();
    res.send( AllLangs );
});



app.post('/SendTranslation', async (req, res) => {
  
  //const fromLang = req.body.formlang;
  const fromLang = await detectLang(req.body.message);
  console.log(`detectLang: ${fromLang}`)
   try {
    const {fromLang, toLang,message} = req.body;   
    const transaction = await translate(fromLang,toLang,message);
   // console.log(transaction);
    res.send({ transaction });
  } catch (e) {
    console.log(e);
  }
});

async function detectLang(text){
  let lang;
 await fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/detect", {
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "accept-encoding": "application/gzip",
      "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
      "x-rapidapi-host": "google-translate1.p.rapidapi.com"
    },
    "body": {
      "q": `${text}`
    }
  })
  .then(response => {
   // console.log(response);
    lang = response;
  }).then((response) => response.json({ response }))
  .catch(err => {
    console.error(err);
  });
  return lang;
}

async function GetLangFromAPI(){
  let languages;
    await fetch(`https://ws.detectlanguage.com/0.2/languages`)
    .then((response) => response.json({ response }))
    .then((response) => {
      languages = response;
      console.log('ok' ,response )
      
    })
    .catch((err) => {
      console.error(err);
    });
  return languages;
};

const translate = async (fromLng, toLng, massage) => {
  let translatedMessage;
  let textToTranslate = encode(massage);
  await fetch(
    `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${fromLng}%7C${toLng}&q=${textToTranslate}&mt=1&onlyprivate=1&de=a%40b.c`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0',
        'x-rapidapi-host':
          'translated-mymemory---translation-memory.p.rapidapi.com',
      },
    }
  )
    .then((response) => response.json({ response }))
    .then((response) => {
      translatedMessage = response.responseData.translatedText;
    })
    .catch((err) => {
      console.error(err);
    });
  return translatedMessage;
};

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
