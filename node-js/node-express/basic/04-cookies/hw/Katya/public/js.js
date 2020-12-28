// alert('check') //for check

function readCookie() {
    fetch('/get-cookie')
        .then(res => res.json())
        .then(data => {
            if (data.cookie) {
                document.getElementById('root').innerHTML = `<h2>You clicked: ${data.cookieEpta}</h2>`
            } else {
                console.log('BLA BLA BLA!')
            }
        })
}

function handleClick(e) {

    const clicked = e.target.innerText
    console.log(e.target.innerText)

    fetch('/send-cookie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ clicked })
        }).then(res => res.json())
        .then(data => {
            document.getElementById('root').innerHTML = `<h2>You have clicked: ${data.cookieEpta}</h2>`
            console.log(data.cookieEpta)
        })
}