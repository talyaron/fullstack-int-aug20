const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

let users = [{ username: "morde", password: "4567" }];

let savedUsername;

app.post("/send-user-data", (req, res) => {
  let { username } = req.body;
  let { password } = req.body;
  let validation = false;

  users.forEach((e) => {
    if (username == e.username && password == e.password) {
      validation = true;
      savedUsername = username;
    } else {
      console.log(`Sorry ${e.username} doesn't exist`);
    }
  });

  if (validation) {
    res.cookie("User validated", username, { maxAge: 30000, httpOnly: true });
  }

  res.send({ validation });
});
app.get("/get-username", (req, res) => {
  res.send({ savedUsername });
});

app.get("/check-valid", (req, res) => {
  let validation = true;
  const checkCookie = req.cookies.validated;
  if (checkCookie == false) {
    validation = false;
  }
  res.send({ validation });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
