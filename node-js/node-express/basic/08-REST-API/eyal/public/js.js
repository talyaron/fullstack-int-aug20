// const messages = []
const messagesWrapper = document.querySelector('#messagesWrapper');

function handleSubmitMessage(e) {
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