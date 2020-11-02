let movies = [];
const textBo1 = document.getElementById('textbox');
const DOM1 = document.getElementById('uotput');

function GetMovies() {
    movies.push(textBox1.value);
    // console.log(textBox1.value);
}


function pintAllMovise() {

    movies.forEach(element => {
        DOM1.innerHTML += `<p> ${element} <p>`;
    })

}
