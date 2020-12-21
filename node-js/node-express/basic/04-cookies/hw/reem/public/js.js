handelclick = (e) => {
    let buttonInnertext = e.target.value;
    console.log(buttonInnertext)
    fetch('/send-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buttonInnertext })
    }).then(res => res.json()).then(data => {
      document.getElementById('root').innerHTML = `<p>${data.test}</p>`;
    })

  }