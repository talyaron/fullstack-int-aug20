let html = '';
const gridContainer = document.getElementById('gridContainer');
function goSide(j) {
    document.getElementById(`pixel40,${j}`).style.backgroundColor = 'blue'

}



for (i = 0; i < 80; i++) {
    for (j = 0; j < 80; j++) {
        html += `<div id="pixel${i},${j}"></div>`;
    }
}

gridContainer.innerHTML = html;
function handleNewGame(e) {
    document.getElementById('newGame').style.display = 'none'
    document.getElementById(`pixel40,40`).style.backgroundColor = 'blue'
    document.getElementById(`pixel40,41`).style.backgroundColor = 'blue'
    document.getElementById(`pixel40,42`).style.backgroundColor = 'blue'
    document.getElementById(`pixel40,43`).style.backgroundColor = 'blue'
    let positonLengthArr =[40,43,4]
    return positonLengthArr


}
console.log(x)


function handleGoRight(e){
    for (j = 40; j < 80; j++) {
        // setTimeout(goSide(j), 1000)
        

    }   
}
