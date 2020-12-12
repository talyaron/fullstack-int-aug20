const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

var app = express();
app.use(cookieParser());

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/getusername", (req, res) => {
  const usernameGiven = req.body.username;
  const { usernameCookie } = req.cookies;
  if (usernameCookie !== usernameGiven) {
    res.cookie("usernameGiven", usernameGiven, {
      maxAge: 5000000,
      httpOnly: true,
    });
  }
  res.send("Got it!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
