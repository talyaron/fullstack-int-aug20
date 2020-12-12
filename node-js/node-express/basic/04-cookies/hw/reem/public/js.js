function handleSubmit(e) {
    e.preventDefault();

    const user = e.target.children.user.value;

    fetch('/send-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let root = document.querySelector('root')
            root.innerHTML+=`${user}`
        })
document.cookie
}