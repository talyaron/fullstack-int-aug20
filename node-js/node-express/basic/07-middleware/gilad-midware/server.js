const express = require('express')
const app = express(); 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cookieParser());
let users = [{name:'gilad',password:123, role:'admin'},{name:'eyal',password:123, role:'user'}]
let products = [{name:'Hangman1',price:450,image:"C:dakepathdd1.jpeg"},{name:'Hangman2',price:450,image:"C:dakepathdd2.jpeg"},{name:'Hangman3',price:450,image:"C:dakepathdd3.jpeg"}]

app.post('/login', (req, res,) => {  
    let ok =false
   
    const user1 = req.body.user
    const passWord = req.body.passWord
    console.log(user1,passWord)
    users.forEach(user => {
        
        if(user.name == user1 && user.password==passWord){
          ok = true
          res.cookie('role', user.role, { maxAge: 20000, httpOnly: false });
          
        }   
    });

   
    res.send({products,ok});
})

app.post('/postProduct', (req, res) => {  
    let ok =true
    products.forEach(product => {
        if(product.name == req.body.name){
        ok = false}  
    });
    if(ok){
        products.push(req.body) 
    }
    res.send({products,ok});
})
app.delete("/delete", (req, res) => {  

    const name = req.body.name;

    
    let nameIndex = products.findIndex(product => product.name === name);
    
    
    //remove the user from the array
    products.splice(nameIndex, 1); 

    console.log(products);

    //return the users
    res.send({ products })
})



const port = process.env.PORT || 3000;
app.listen(3000, () => { console.log('listen 3000') })