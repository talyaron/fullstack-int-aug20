
let typingTimer;                //timer identifier
const doneTypingInterval = 2000;  //time in ms (5 seconds)
const OrigenText = document.getElementById('Origen');
const LangFrom =  document.getElementById('LangFrom');


window.addEventListener('load', async() => {      
 const allLangs = await handleLoadLang() ;
 const t = [...allLangs]
 console.log(t);
 t.forEach(lang => {
     console.log(lang);
   
     const LangFrom1 = document.getElementById("LangFrom");
     const LangTo =  document.getElementById('LangTo');

     var option = document.createElement("option");
     var option1 = document.createElement("option");

     option.text = lang.name;
     option.value = lang.code;
     option1.text = lang.name;
     option1.value = lang.code;

     LangFrom1.add(option);
     LangTo.add(option1);
 });


});

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
    const message = OrigenText.value;
    console.log(message)
   

        try {
            fetch('/SendTranslation', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fromLang: `${LangFrom.value}`, toLang: `${LangTo.value}`, message: `${message}` }),
            }).then(r => r.json())
                .then(data => {
                    console.log(ariaTranslated);
                    document.getElementById('transform').value = data.transaction;
                })
        } catch (e) {
            console.log(e);
        }
        }
 



async function handleLoadLang() {
    let t ;
    console.log('handleLoadLang called')
    try { 
   await fetch('/getLang')
    .then(r => r.json())
    .then(data => {
       
        t = data
      //  document.getElementById('transform').value = data.Transaction;
    })} catch (e) {
        console.log(e);
    }
   console.log('handleLoadLang OK')
    return t;

    }
    
