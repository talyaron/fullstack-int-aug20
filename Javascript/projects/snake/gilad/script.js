let html = '';
let position = [];
const gridContainer = document.getElementById('gridContainer');


gridContainer.innerHTML = html;
function handleNewGame(e) {
    html = '';
    for (i = 0; i < 80; i++) {
        for (j = 0; j < 80; j++) {
            html += `<div id="pixel${i},${j}"></div>`;
        }
    }
    
    gridContainer.innerHTML = html;
    document.getElementById('newGame').style.display = 'none'
    document.getElementById(`pixel40,40`).style.backgroundColor = 'red'
}
function findSnakePosition(){
    for (i = 0; i < 80; i++) {
        for (j = 0; j < 80; j++) {
           if( document.getElementById(`pixel${i},${j}`).style.backgroundColor == 'red')
           {
             position = [i,j]
           }
        }
       
    }
    console.log(position)
    return position
}


// function handleGoRight(e){
//     let position = findSnakePosition();
//     console.log(position)
//     for (j = position[1]; j < 80; j++) {
//         // setTimeout(()=>{goSidej(j)}, 1000)
//         document.getElementById(`pixel${i},${j}`).style.backgroundColor = 'red'
//         console.log('i moved right ')

//     }   
// }
function handleGoRight(e){
    let position = findSnakePosition();
    console.log(position)
    position[1]++
    
        // setTimeout(goSide(j), 1000)
        document.getElementById(`pixel${position[0]},${position[1]}`).style.backgroundColor = 'red'
        oldPosition = position[1]
        oldPosition--
        document.getElementById(`pixel${position[0]},${oldPosition}`).style.backgroundColor = 'white'
        if(position[1] == 79){
            document.getElementById('newGame').style.display = 'block'

            gridContainer.innerHTML=''
        }

    }   

