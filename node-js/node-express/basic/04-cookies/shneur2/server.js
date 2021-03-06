const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
app.use(cookieParser())

// מדפיס עוגיות
app.use((req, res, next) => {
    let {
        iFollowYou
    } = req.cookies;
    console.log(iFollowYou);

    // מייצר עוגיות

    if (!iFollowYou) {
        res.cookie("iFollowYou", "this-is-my-cookie1111");
        iFollowYou = "this-is-my-cookie1111";
    };
    res.message = iFollowYou;
    console.log("res.message", res.message)
    next();
})
app.get('/', (req, res) => {
    res.send(`<h1>${res.message}</h1>`);


})
app.use(express.static("public"))




// מתחבר לכתובת
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(port)
})

