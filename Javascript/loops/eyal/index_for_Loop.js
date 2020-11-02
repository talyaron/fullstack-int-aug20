/* function countNums(countUntil){
    for (let i=1; i<countUntil;i++){
        console.log(i);
    }
} 

countNums(1000);*/
debugger;
var movies = [];

const textBo1 = document.getElementById(textbox);
const DOM1 = document.getElementById(uotput);

function GetMovies() {
    movies.push(textBo1.innerText);
};


function pintAllMovise(movies) {

    movies.forEach(element => {
        DOM1.innerText = `<p> ${element} <p>`
    });

};
