function handleSubmit(e) {
    try {

        e.preventDefault();

        let user = e.target.value;

        let root = document.querySelector('.root');
        let root1 = document.querySelector('.root1');
        root.innerText += `${user},`;


        console.log('user:', user)

        if (typeof user !== 'string') throw new Error('user is not a string', user)
        
        fetch('/send-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
            .then(res => res.json())
            .then(data => {
                let x = document.cookie;
                root1.innerHTML = `${x},`;
            })
    } catch (e) {
        console.error(e)
    }
}

