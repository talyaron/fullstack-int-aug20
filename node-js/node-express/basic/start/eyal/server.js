const express = require('express')
const app = express();

app.use(express.static('public'));

app.get('/getTime',(req, res)=>{
    const dataTime = new Date();                    
    const TimeNow = dataTime.getTime();
    res.send({TimeNow})
   
    
})


const port = 8080;

app.listen(port, () => {console.log('listening on port 8080',port)})