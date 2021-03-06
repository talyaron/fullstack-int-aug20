const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"));

const users = [
  { username: "morde", password: "123", role: "admin" },
  { username: "olga", password: "123", role: "public" },
];

const productsArray = [
  {
    title: "Porcshe Carrera",
    price: 130000,
    img:
      "https://cnet3.cbsistatic.com/img/jDrQMFPP_zbP_ucNrU4PblatNHo=/1200x675/2020/07/01/f9fd026c-cf70-4170-a1c6-53521c35a21a/2020-porsche-911-carrera-s-manual-001.jpg",
  },
  {
    title: "LG Fridge",
    price: 1200,
    img:
      "https://www.sbitanyhome.com/content/images/thumbs/0018804_lg-refrigerator-gr-m777ls-silver_550.jpeg",
  },
  {
    title: "Air-Jordan's",
    price: 850,
    img:
      "https://stockx.imgix.net/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607043976",
  },
];

function authUser(req, res, next) {
  const { role } = req.cookies;

  next();
}

app.post("/auth-user", (req, res) => {
  const { username, password } = req.body;

  // let isUserExist = false;
  let role = "denied";

  const indexUser = users.findIndex(
    (user) => user.username === username && user.password === password
  );
  if (users[indexUser].role === "admin") {
    res.authorized = true;
  }
  if (indexUser > -1 && res.authorized == true) {
    // isUserExist = true;
    let role = users[indexUser].role;
    res.cookie("role", role, { maxAge: 20000, httpOnly: true });
    res.send({ ok: true });
  } else {
    res.cookie("role", role, { maxAge: 20000, httpOnly: true });
    res.send({ ok: false });
  }
});

app.get("/get-products-array", (req, res) => {
  res.send({ productsArray });
});

app.post("/send-new-price", (req, res) => {
  const { newPrice, productToUpdate } = req.body;

  let productIndex = productsArray.findIndex(
    (product) => product.title === productToUpdate
  );

  if (newPrice == "") {
    console.log("Sorry, You didn't enter a valid number");
  } else {
    productsArray[productIndex].price = newPrice;
  }

  res.send({ status: 200 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
