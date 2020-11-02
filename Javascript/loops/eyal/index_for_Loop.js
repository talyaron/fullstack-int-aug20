// debugger;
var movies = [];

const textBo1 = document.getElementById(textbox);
const DOM1 = document.getElementById(uotput);

let movies = [];
const textBo1 = document.getElementById('textbox');
const DOM1 = document.getElementById('uotput');

function GetMovies() {
    movies.push(textBo1.innerText);
};


function pintAllMovise() {

    movies.forEach(element => {
        DOM1.innerText += `<p> ${element} <p>`
    });

};
