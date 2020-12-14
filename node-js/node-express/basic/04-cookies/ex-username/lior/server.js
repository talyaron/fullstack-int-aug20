const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const bodyParser = require("body-parser");

app.use(express.static('public'))

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post("/getusername", (req,res) =>{
    const yourename = req.body.username;
  const { cookie } = req.cookies;
  if (cookie !== yourename) {
    res.cookie("yourename", yourename, {
      maxAge: 200000000,
      httpOnly: true,
<<<<<<< Updated upstream
    });
}
})
=======
});
  }

>>>>>>> Stashed changes

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});