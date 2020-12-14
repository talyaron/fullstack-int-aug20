const { json } = require("body-parser");







fetch('/send-login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({userInput}),})
    .then(r=>r.json())