const http = require('http');
const fs = require('fs');
const { Recoverable } = require('repl');

//create a server object:
http.createServer((req, res) => {
    if ( req.url === '/'){
        fs.readFile('index.html','utf-8',(err,data)=>{
            if (err) throw (err);
            res.writeHead(200,{ 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    }else if(req.url === '/style.css'){
        fs.readFile('style.css', 'utf-8', (err, data) => {
            if (err) throw (err);

            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.write(data); //write a response to the client
            res.end(); //end the response
        })
    }else if(req.url === '/js.js'){
        fs.readFile('js.js','utf-8', (err,data) =>{
            if (err) throw (err);
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.write(data); 
            res.end();
        })
    }else if (req.url === '/favicon.ico') {

        const img = fs.readFileSync('./favicon.ico');
        res.writeHead(200, {'Content-Type': 'image/ico' });
        res.end(img, 'binary');

    }else {

        fs.readFile('404.html', 'utf-8', (err, data) => {

            if (err) throw (err);

            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write(data); //write a response to the client
            res.end(); //end the response
        })
    }
}).listen(8080); //the server object listens on port 8080