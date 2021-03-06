const http = require('http');
const fs = require('fs')
let count = 1
//create a server object:
http.createServer((req, res) => {

    

    if (req.url === '/') {

        fs.readFile('index.html', 'utf-8', (err, data) => {

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data); //write a response to the client
            res.end(); //end the response
        })
    } else if (req.url === '/style.css') {


       
        fs.readFile('style.css', 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.write(data); //write a response to the client
            res.end(); //end the response
        })
    } else if (req.url === '/script.js') {
       
        fs.readFile('function.js', 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.write(data); //write a response to the client
            res.end(); //end the response
        })
    } else {
       
        fs.readFile('404.html', 'utf-8', (err, data) => {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write(data); //write a response to the client
            res.end(); //end the response
        })
    }




}).listen(8080, () => {
    console.log('server listen on port 8080')
});