const http = require('http');
const fs = require('fs')
let count = 1
//create a server object:
http.createServer((req, res) => {
    try {
        console.log(`${count++}) ${req.url}`);

        if (req.url === '/') {


            fs.readFile('hm.html', 'utf-8', (err, data) => {
                try {
                    if (err) throw (err);


                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.write(data); //write a response to the client
                    res.end(); //end the response
                } catch (e) {
                    console.error('11', e)
                } finally{
                    if(err){
                        fs.readFile('500.html', 'utf-8', (err, data) => {
                            res.writeHead(405, { 'Content-Type': 'text/html' })
                            res.write(data);
                            res.end();
                        }) 
                    }
                }
            })
        } else if (req.url === '/dist/hm.css') {



            fs.readFile('hm.css', 'utf-8', (err, data) => {

                if (err) throw (err);

                res.writeHead(200, { 'Content-Type': 'text/css' })
                res.write(data); //write a response to the client
                res.end(); //end the response
            })
        } else if (req.url === '/hm.js') {

            fs.readFile('hm.js', 'utf-8', (err, data) => {

                if (err) throw (err);

                res.writeHead(200, { 'Content-Type': 'text/javascript' })
                res.write(data); //write a response to the client
                res.end(); //end the response
            })
        } else if (req.url === '/hangman.png') {

            const img = fs.readFileSync('./hangman.png');
            res.writeHead(200, {'Content-Type': 'image/ico' });
            res.end(img, 'binary');
    
        } else {

            fs.readFile('404.html', 'utf-8', (err, data) => {

                if (err) throw (err);

                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data); //write a response to the client
                res.end(); //end the response
            })
        }
    } catch (e) {
        console.error('Error:', e)
        fs.readFile('500.html', 'utf-8', (err, data) => {
            res.writeHead(500, { 'Content-Type': 'text/html' })
            res.write(e);
            res.end();
        })

    }



}).listen(8080, () => {
    console.log('server listen on port 8080')
});