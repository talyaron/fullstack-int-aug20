const jokes = [
    "we are going to win this game",
    "this game is easy pisy",
    "we are grate programars",
    "you neale this one",
    "congrates to you you own",
    "we are the best group evevr"
]
setInterval(() => {
    i = Math.floor(Math.random() * 6);
    Choosenjoke = jokes[i]
    console.log(Choosenjoke)
    document.getElementById('box').innerHTML = `<h1>you have loged to this website ${data.timeSinceRefresh} seconds ago</h1>`

}, 1000)

// setInterval(() => {


//     fetch('/jokesa')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('box').innerHTML = `<h1>you have loged to this website ${data.jokes} seconds ago</h1>`
//         })
// }, 1000)




setInterval(() => {


    fetch('/timeSinceRefresh')
        .then(response => response.json())
        .then(data => {
            // document.getElementById('box').innerHTML = `<h1>you have loged to this website ${data.timeSinceRefresh} seconds ago</h1>`
        })
}, 1000)



const theSetences = document.getElementById("theSetences")