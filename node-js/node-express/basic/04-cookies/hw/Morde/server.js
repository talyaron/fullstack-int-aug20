const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

var app = express();
app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/getbtn", (req, res) => {
  let btnClicked = req.body.btnClicked;
  res.cookie(btnClicked, {
    maxAge: 5000000,
    httpOnly: true,
  });
  res.send("Cookie Saved");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
