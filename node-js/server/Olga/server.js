const http = require('http');
const fs = require('fs')



//create a server object:
http.createServer((req, res) => {

fs.readFile('index.html', 'utf-8', (err, data)=>{
res.write(data); //write a response to the client
    res.end(); //end the response
})

    
}).listen(3000); //the server object listens on port 3000