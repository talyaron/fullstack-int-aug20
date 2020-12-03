const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {
        console.log(req.url);
        if (req.url === '/') {
            fs.readFile('index.html', 'utf-8', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data);
                res.end();
            })
}
        else  if (req.url === '/style.css') {
            fs.readFile('style.css', 'utf-8', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/css' })
                res.write(data);
                res.end();
            })
        }  
    })
    .listen(8083, () => {
        console.log('server listen on port 8080')
    });