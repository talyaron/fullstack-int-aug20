let clickArray = [];

let storedClicks = JSON.parse(localStorage.getItem("clickArray"));

const root = document.getElementById("root");

storedClicks.forEach((btn) => {
  root.innerHTML += `<div><p>${btn}</p></div>`;
});

function handleClick(e) {
  const btnClicked = e.target.name;
  clickArray.push(btnClicked);
  localStorage.setItem("clickArray", JSON.stringify(clickArray));
  let storedClicks = JSON.parse(localStorage.getItem("clickArray"));
  const root = document.getElementById("root");
  let lastBtnClicked = storedClicks[storedClicks.length - 1];

  root.innerHTML += `<div><p>${lastBtnClicked}</p></div>`;

  fetch("/getbtn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ btnClicked }),
  }).then((data) => {
    console.log(data);
  });
}
