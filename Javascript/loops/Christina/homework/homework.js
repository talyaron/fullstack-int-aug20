let theWeekend = {
    name: "The weekend",
    age: 30,
    imgSrc: '<img src="homework/the-weekend.jpg">'
}

let justin = {
    name: "Justin Bieber",
    age: 26,
    imgSrc: '<img src="homework/justin.jpg">'
}

let lana = {
    name: "Lana del ray",
    age: 35,
    imgSrc: '<img src="homework/Lana-Del-Rey.jpg">'
}

let britney = {
    name: "britney spears",
    age: 38,
    imgSrc: '<img src="homework/britneyspears.jpg">'


}
let artists = [theWeekend, justin, lana, britney]
let root = document.getElementById('root');
console.log(artists);
for (let artist of artists) {
    if (artist.age >= 30) {
        root.innerHTML += (`<p>The name of the artists: ${artist.name}</p>`)
        root.innerHTML += (`<p>age: ${artist.age}</p>`)
        root.innerHTML += (artist.imgSrc)
    }

}