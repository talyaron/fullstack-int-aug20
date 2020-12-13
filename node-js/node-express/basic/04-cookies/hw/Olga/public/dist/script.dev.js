"use strict";

function handleClick(e) {
  var nameBtn = e.target.name;
  console.log(nameBtn);
  fetch('/send-namebutton', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nameBtn: nameBtn
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    var info = document.getElementById("displayInfoId");
    console.log(data);
    console.log(info);
    info.innerHTML = data;
  });
}
/*function handleSubmit(e) {
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
        })

}*/