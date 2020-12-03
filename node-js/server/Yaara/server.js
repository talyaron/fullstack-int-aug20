
const http = require('http');
const fs=require('fs') // Allows to work with files


http.createServer((req, res) => {
    


if (req.url === '/') {
        fs.readFile('index.html', 'utf-8', (err, data)=> {
            res.writeHead(200, { 'content-Type': 'text/html' })
            res.write(data);
            res.end();
        }) 
    
    }
    else if (req.url === '/js.js'){
            fs.readFile('js.js', 'utf-8', (err, data)=> {
                res.writeHead(200,{'content-Type': 'text/javascript'})
                res.write(data);
                res.end();
            })
    }
     else if (req.url === '/subjects.js'){
            fs.readFile('subjects.js', 'utf-8', (err, data)=> {
                res.writeHead(200,{'content-Type': 'text/javascript'})
                res.write(data);
                res.end();
            })
        } 
}).listen(8081); //read a file