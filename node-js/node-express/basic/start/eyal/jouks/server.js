const jocks = [{title:'aa',jock:'a chiken '},
                {title:'aa',jock:'a tertel'},
                {title:'aa',jock:'a duck'}];

                const express = require('express')
                const app = express();
                
                app.use(express.static('public'));


                app.get('/getjock',(req, res)=>{
                        
                    const randjockNum = Math.floor(Math.random() * jocks.length);
                   const randjock = jocks[randjockNum].jock
                    res.send({randjock})
                   
                    
                })
                
                
                const port = 8080;
                
                app.listen(port, () => {console.log('listening on port 8080',port)})