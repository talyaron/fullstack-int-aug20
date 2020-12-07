// console.log("hillel")

// const { response } = require("express");
window.onload = Start()
function Start() {
    fetch('/bdicha')
        .then(response => response.json())
        .then(data => {
            document.querySelector("#text").innerHTML = data.Bdiha
        })
    setTimeout(function () { Start() }, 8000)
}