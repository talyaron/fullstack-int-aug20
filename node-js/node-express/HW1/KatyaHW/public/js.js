// alert('working') //Checking







// setInterval(() => {
//     fetch('/get-number-of-dogs')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('root').innerHTML = `I have ${data.numberOfDogs} dogs`
//         })
// }, 5000)



function Start() {
    fetch('/bdicha')
        .then(response => response.json())
        .then(data => {
            document.querySelector("#text").innerHTML = data.Bdiha
        })
    setTimeout(function() { Start() }, 8000)
}