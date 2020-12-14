function handleSubmit(e) {

  e.preventDefault();

  const user = e.target.value;

  let root = document.querySelector('.root');
  let root1 = document.querySelector('.root1');
  root.innerText += `${user},`;

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
          root1.innerHTML = `${arr},`;
      })

}

