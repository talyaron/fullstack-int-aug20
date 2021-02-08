
let typingTimer;                //timer identifier
const doneTypingInterval = 2000;  //time in ms (5 seconds)
const OrigenText = document.getElementById('Origen');
const LangFrom = document.getElementById('LangFrom');
const LangTo = document.getElementById('LangTo');



window.addEventListener('load', async () => {
    const allLangs = await handleLoadLang();
    const t = [...allLangs]

    t.forEach(lang => {
        const option = document.createElement("option");

        option.text = lang.name;
        option.value = lang.code;
        LangFrom.add(option);

        option.text = lang.name;
        option.value = lang.code;
        LangTo.add(option);
    });

});




//on keyup, start the countdown

OrigenText.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (OrigenText.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval)
    }
});

//user is "finished typing"
function doneTyping() {
    const LangFrom = document.getElementById('LangFrom');
    const LangTo = document.getElementById('LangTo');
    const message = OrigenText.value;
    try {
        fetch('/SendTranslation', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    formlang: `${LangFrom.value}`,
                    toLang: `${LangTo.value}`,
                    message: `${message}`
                }
            ),
        }
        ).then(r => r.json())
            .then(data => {
                document.getElementById('transform').innerHTML = `<p>${data.transaction}</p>`;
            })
    } catch (e) {
        console.log(e);
    }
}




async function handleLoadLang() {
    try {
        let t;
        await fetch('/getLang')
            .then(r => r.json())
            .then(data => t = data)
    } catch (e) {
        console.log(e);
    }
    return t;

}

