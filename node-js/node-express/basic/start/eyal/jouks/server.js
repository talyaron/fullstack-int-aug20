const jocks = [{title:'aa',jock:'Q: How are a cat and a sentence different? A: A cat has claws at the end of its paws; a sentence has a pause at the end of its clause!'},
                {title:'aa',jock:'Q: What do you call a penguin in the desert? A: Lost'},
                {title:'aa',jock:'An elephant drinking from a stream spots a tortoise lounging on the shore. He grabs it with his trunk and flings it into the jungle. A passing zebra asks, "Why did you do that?" ...... "Forty years ago that very tortoise nipped my tail just for fun," the elephant said. "Wow, forty years ago! How did you remember that?" "Well I have turtle recall," replied the elephant.'},
                {title:'aa',jock:'On a Facebook page for beginning artists, one asked, “Any suggestions for painting dogs?” Another responded,  “Wait till they’re asleep.”'},
                {title:'aa',jock:'Our booking office had three phones. One day during lunch, I was responsible for answering all of them. It was a constant repeat of “May I help you?” or “Will you hold?” I guess I got confused because I surprised one man on the other end of the line when I answered his call with, “May I hold you?” —Vera Granger'},
                {title:'aa',jock:'The printer was broken, and no one could figure out whose fault it was. After arguing back and forth, our supervisor took charge. “Look,” he said, “we really don’t need to determine who is responsible for this mess. We just want someone to take the blame.”'},
                {title:'aa',jock:'I get plenty of exercise – jumping to conclusions, pushing my luck, and dodging deadlines.'},
                {title:'aa',jock:'One of my wife’s third graders was wearing a Fitbit watch, which prompted my wife to ask, “Are you tracking your steps?” “No,” said the little girl. “I wear this for Mommy so she can show Daddy when he gets home.” —James Avery'},
                {title:'aa',jock:'Could a ... ... librarian be called a bookkeeper? ... referee be a game warden? ... dairyman be a cowboy? ... cabinetmaker be the president? —Submitted by J. Lee'},
                {title:'aa',jock:'During a job interview at the 99 Cents store, my son was asked, “Where do you see yourself in five years?” My son’s reply: “At the Dollar Store.” He got the job. —A.K. via rd.com'},
            ];

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