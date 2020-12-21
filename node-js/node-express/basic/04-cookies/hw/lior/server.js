const express = require('express')
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/push' , (req,res)=>{
    let {count} = req.cookies
    let pbooten = ''
    console.log(count)

    if (count !== undefined) {
        pbooten = `${count} -- ${req.body.pushed}`;
   } else {
    pbooten = `${req.body.pushed}`;
   }
   res.cookie('count', pbooten, { maxAge: 5000000, httpOnly: false });
    res.send({
        pbooten
    });

})

app.use(express.static('public')) 

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })