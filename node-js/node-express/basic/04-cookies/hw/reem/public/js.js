function handleSubmit(e) {
    e.preventDefault();

    const user = e.target.value;

    let root = document.querySelector('.root');
  root.innerHTML += `<h1>${user}</h1>`;
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
            let arr = data.arr;
            console.log(arr)
            // document.querySelector('root').innerHTML = `<p>${data.json_str    }</p>`;
            // let root = document.querySelector('root')
            // root.innerHTML+=`${user}`
        })

}