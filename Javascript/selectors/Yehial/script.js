const messages = [];


function handleSubmitMessage(e){
    e.preventDefault();
    console.log(e);
    const message = e.target.children.message.value;
    console.log(message);

    messages.push(message);

    document.querySelector('#messagesWrapper').innerHTML+=htmlMessage(message);
    e.target.reset();
    
}

function htmlMessage(message){

    return `<div class='message'>${message}</div>`
}