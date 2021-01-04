/* let lastStroke;

function counting(startTime) {
    var elapsedTime = startTime - lastStroke;
    lastStroke = startTime;
    return Math.floor(elapsedTime / 1000);
} */

let typingTimer;                //timer identifier
const doneTypingInterval = 2000;  //time in ms (5 seconds)
const OrigenText = document.getElementById('Origen');

//on keyup, start the countdown

OrigenText.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (OrigenText.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval)
    }
});

//user is "finished typing," do something
function doneTyping () {
    const ariaTranslated =  document.getElementById('transform');
    const LangFrom =  document.getElementById('LangFrom');
    const LangTo =  document.getElementById('LangTo');
    const message = OrigenText.value;/////////////////////////////////////////////////////
    console.log(message)
    // let startTime = Date.now();
    
    //if (counting(startTime) > 3) {

        try {
            fetch('/SendTranslation', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ formlang: `${LangFrom.value}`, toLang: `${LangTo.value}`, message: `${message}` }),
            }).then(r => r.json())
                .then(data => {
                    console.log(ariaTranslated);
                    document.getElementById('transform').value = data.Transaction;
                })
        } catch (e) {
            console.log(e);
        }
        }
  //  }}


/* function handleText(e) {
   
} */

function handleLoadLang() {
    try {
    fetch('/getLang',{
        method: 'GET'
    }).then(r => r.json())
    .then(data => {
        console.log(data);
      //  document.getElementById('transform').value = data.Transaction;
    })} catch (e) {
        console.log(e);
    }
    }
    
