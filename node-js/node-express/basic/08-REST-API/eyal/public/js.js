// const messages = []
const messagesWrapper = document.querySelector('#messagesWrapper');

function handleSubmitMessage(e) {
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

    fetch('/SendmMessage', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    }).then(r => r.json())
    .then(data => {
        console.log(data.cnt)
        document.querySelector('#messagesWrapper').innerHTML += htmlMessage(
            data.cnt
          );
    })

  }
}



function htmlMessage(message) {
  return `<div class='message'>${message} <div class="tail"></div> </div>`;
}
function htmlIncomeMessage(message) {
  return `<div class='message InMessage' ${message} <div class="tail"></div> </div>`;
}

function handleTextArea(e) {
  if (e.key === 'Enter' && e.shiftKey == true) {
    //submit
    document.getElementById('submitButton').click();
  }
}

/* 
        function handleSendCity(e) {
            e.preventDefault();

            const city = e.target.children.city.value;
            console.log(city)

            fetch('/sendCity', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ city })
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data)
                    document.getElementById('weather').innerText = `${Math.round(data.weather.main.temp)} C &#8451;`;
                })
        }
 */
