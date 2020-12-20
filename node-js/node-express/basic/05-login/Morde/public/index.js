function handleSubmit(e) {
  e.preventDefault();
  const username = e.target.children.username.value;
  const password = e.target.children.password.value;
  console.log(`username: ${username}, password: ${password}`);

  fetch("/send-user-data", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.validation) {
        window.location.replace("logged.html");
      } else {
        document.getElementById("root").innerHTML = `Sorry, Wrong credentials!`;
      }
    });
}
