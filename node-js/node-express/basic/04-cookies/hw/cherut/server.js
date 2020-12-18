const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());

const user = [];

// app.use((req, res, next)=>{

//     let json_perse = req.cookies.user;
//     let arr = JSON.parse(json_perse);
//     // res.write('<h1>hi</h1>')
//     res.send(`<h1>${arr}</h1>`)
//     next();
// });



app.post('/send-user', (req, res) => {

    try {

        let cookies = req.cookies.user;
        console.log(cookies)

        

        // // {user:['cherut', 'or']}


        let user = req.body.user;

        cookies += ';'+user
        // cookies.push(json_str);
        // console.log(cookies);

        res.cookie('user', cookies, { maxAge: 50000000, httpOnly:false});

        // let json_perse = req.cookies.user;
        // let arr = json_perse;
        res.send({ ok: true })
    } catch (e) {
        console.log("error:", e)
    } 
})  



app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listen on port ${port}`) });
