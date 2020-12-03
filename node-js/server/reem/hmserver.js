const http = require('http');
const fs = require('fs')

//create a server object:
http.createServer((req, res) => {
        if (req.url === '/') {
            fs.readFile('hm.html',(err, data) => {
                res.write(data); //write a response to the client
                res.end(); //end the response
            })
        } else if (req.url === '/dist/hm.css') {
            fs.readFile('dist/hm.css',(err, data) => {
                res.write(data); //write a response to the client
                res.end(); //end the response
            })
        } else if (req.url === '/hm.js') {
            fs.readFile('hm.js', (err, data) => {
                res.write(data); //write a response to the client
                res.end(); //end the response
            })
        } else if (req.url === '/hangman.png') {
            const img = fs.readFileSync('./hangman.png');
            res.end(img, 'binary');
    
        }
    }).listen(8080, () => {
    console.log('server listen on port 8080')
});