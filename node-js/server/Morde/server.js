const http = require('http');
const fs = require('fs')

//create a server object:
http.createServer((req, res) => {
        if (req.url === '/') {
            fs.readFile('index.html',(err, data) => {
                res.write(data); //write a response to the client
                res.end(); //end the response
            })
        } else if (req.url === '/dist/style.css') {
            fs.readFile('dist/style.css',(err, data) => {
                res.write(data); //write a response to the client
                res.end(); //end the response
            })
        } else if (req.url === '/js.js') {
            fs.readFile('js.js', (err, data) => {
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