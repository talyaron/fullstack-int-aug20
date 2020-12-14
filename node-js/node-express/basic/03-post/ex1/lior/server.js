const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

app.use(bodyParser.json());

app.use(express.static('public'))

  // const login = [{username:'lior',password:'1111'},
 // {username:'moran',password:'2222'},
  // {username:'cherut',password:'3333'},
 // {username:'tal',password:'4444'}]

    // const user = login.map(a => a.username);
    // const pass = login.map(a => a.password);
    const {user,password} = req.body
    let ok = false;
    
    app.post('/send_login_information', (req, res) => {

        console.log('sending to the claient: ' + req.body);
        if ((user =='moran') && (password=='2222')) {
            ok = true;
       
        }
        res.send({ok,user,pass});
    
    })

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) 