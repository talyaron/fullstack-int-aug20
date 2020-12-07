const express = require('express')
const app = express()
app.use(express.static('public'))

let PrevRand = ''

app.get('/hillel-arouas', (req, res) => {
    const Bdihot = [
        "כשלתימנים יש עור יבש הם מורחים קרם לחוח?"
        , "אם קנגורו בוגר עדיין גר אצל אמא שלו, הוא משלם לה דמי כיס ?"
        , 'גבר אחד נפטר ובשעת הקבורה החל מישהו להספיד אותו: "הוא היה בעל למופת, אדם הגון, אב לדוגמא..." האלמנה התכופפה לעבר בנה ואמרה לו בלחש: "לך תסתכל בקבר שלא התבלבלנו עם הלוויה של מישהו אחר".'
        , 'מצלצלים בדלת "שלום אדוני, תרצה אולי לתרום משהו לבית האבות?" הזקן צועק: "יונה, שימי עלייך את המעיל ותכיני את המזוודה"'
    ];
    let Rand
    let DoCounter = 0
    do {
        DoCounter++
        Rand = Math.floor((Math.random() * Bdihot.length));
    } while (Rand == PrevRand);

    res.send({ Bdiha: Bdihot[Rand], Prev: PrevRand, DoCounter })
    PrevRand = Rand;
})

app.listen(8080)