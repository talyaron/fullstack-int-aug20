// const messages = []
const messagesWrapper = document.querySelector('#messagesWrapper');

function handleSubmitMessage(e) {
<<<<<<< HEAD
    e.preventDefault()
    console.log(e)
    const message = e.target.elements.message.value
    console.log(message)

    // messages.push(message);
    if (message.length > 2) {
        document.querySelector('#messagesWrapper').innerHTML +=  htmlMessage(message) ;/* htmlIncomeMessage(message); */
        e.target.reset();
        messagesWrapper.scrollTo(0,messagesWrapper.scrollHeight);
    }
}

function htmlMessage(message) {
    
       return `<div class='message'>${message} <div class="tail"></div> </div>`  
  
   
}
function htmlIncomeMessage(message) {
    
       return `<div class='message InMessage' ${message} <div class="tail"></div> </div>`  
  
   
}

function handleTextArea(e){
   
    if(e.key === 'Enter' && e.shiftKey == true){
        //submit
        document.getElementById('submitButton').click();
    }
}
=======
  e.preventDefault();
  // console.log(e)
  const message = e.target.elements.message.value;
  // console.log(message)

  // messages.push(message);
  if (message.length > 2) {
    document.querySelector('#messagesWrapper').innerHTML += htmlMessage(
      message
    ); /* htmlIncomeMessage(message); */
    e.target.reset();
    messagesWrapper.scrollTo(0, messagesWrapper.scrollHeight);
    console.log('start fetch');

    fetch('/SendMessage', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    }).then(r => r.json())
      .then(data => {
        console.log(data.hebTransaction)
        document.querySelector('#messagesWrapper').innerHTML += htmlIncomeMessage(
          data.hebTransaction
        );
      })

  }
}



function htmlMessage(message) {
  return `<div class='message'>${message} <div class="tail"></div> </div>`;
}
function htmlIncomeMessage(message) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10];
  msg.volume = 1; // From 0 to 1
  msg.rate = 1; // From 0.1 to 10
  msg.pitch = 1; // From 0 to 2
  msg.text = message;
  msg.lang = 'he';
  speechSynthesis.speak(msg);

  /* speechSynthesis.getVoices().forEach(function(voice) {
    console.log(voice.name, voice.default ? voice.default :'');
  }); */
  

  return `<div class='message InMessage'> ${message} <div class="tail"></div> </div>`;
}

function handleTextArea(e) {
  if (e.key === 'Enter' && e.shiftKey == true) {
    //submit
    document.getElementById('submitButton').click();
  }
}
>>>>>>> master
