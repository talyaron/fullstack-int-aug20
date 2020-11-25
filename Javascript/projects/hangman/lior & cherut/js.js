const words = [
'abruptly',
'absurd',
'abyss',
'affix',
'askew',
'avenue',
'awkward',
'axiom']

let chosenWord = Math.floor(Math.random() * words.length);
chosenWord = words[chosenWord];

const alfabeta = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x','y','z' ];

let root = document.querySelector('#root');
let html = '';

alfabeta.forEach(sign =>{
   html += `<button class='button' data-sign="${sign}">${sign}</button>`;
})
root.innerHTML +=`<div id='buttons'>${html}</div>` ;

console.log(chosenWord)
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
ctx2.lineWidth = 2;

let letters = document.querySelector('#letters');

let html2 = '';
for (var i = 0; i < chosenWord.length; i++) {
  let letter = chosenWord.charAt(i)
  html2 += `<div class='${letter}'></div>`
}
letters.innerHTML = html2;

let fanctions = [click1, click2, click3, click4, click5, click6, click7, click8, click9]
let nam = 0;
let winner = 0;

let buttons = document.querySelectorAll('.button');
buttons.forEach(button=>{
  let clickLater= button.dataset.sign
  button.addEventListener('click',filterLeter => {
    //let searchTerm = clickLater.target.value
  let regSearchTerm = new RegExp(clickLater,'g');
  if(regSearchTerm.test(chosenWord)){
    let corectLetter = document.querySelectorAll(`.${clickLater}`);
    corectLetter.forEach(elm =>{
    elm.innerHTML = `<h1>${clickLater}</h1>`
    

      buttons.forEach(button =>{
        if(button.dataset.sign == clickLater ){
          button.style.display = 'none';
        }
      })

      winner++;
    if(winner == chosenWord.length){
      console.log('you win')
    }
    
    })


  } else{
    console.log("no");
    console.log(nam)
    buttons.forEach(button =>{
      if(button.dataset.sign == clickLater ){
        button.style.display = 'none';
      }
    })
    
    if(nam<=8){
      fanctions[nam]();
      nam++;
      
    }else {
      alert('game over')
    }
    
  }

  chosenWord
  
  // {
  //   console.log("no");
  //   function () { 
  //     fanctions[0](); 
  //   }
  
  // }
    

  })
 
})



function click1() {
  ctx.beginPath();
  ctx.moveTo(130, 340);
  ctx.lineTo(350, 340);
  ctx.lineTo(340, 360);
  ctx.lineTo(100, 365);
  ctx.lineTo(130, 340);
  ctx.stroke();
  ctx.fill()
}

function click2() {
  ctx.beginPath();
  ctx.moveTo(290, 349);
  ctx.lineTo(305, 30);
  ctx.lineTo(320, 40);
  ctx.lineTo(295, 349);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(305, 30);
  ctx.lineTo(200, 30);
  ctx.lineTo(320, 40);
  ctx.lineTo(295, 349);
  ctx.stroke();
}

function click3(){ctx.beginPath();
  ctx.moveTo(315, 100);
  ctx.lineTo(250, 35);
  ctx.lineTo(270,35);
  ctx.lineTo(317, 85);
 ctx.stroke();
 }

 function click4() {
  ctx.beginPath();
  ctx.moveTo(200, 30);
  ctx.lineTo(200, 70);
  ctx.stroke();
  ctx.fill()
}


function click5() {
  ctx.beginPath();
  ctx.arc(200, 100, 30, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();

  ctx.moveTo(210, 70);
  ctx.lineTo(150, 65);
  ctx.stroke();

  ctx.moveTo(210, 70);
  ctx.lineTo(160, 60);
  ctx.stroke();

  ctx.moveTo(210, 70);
  ctx.lineTo(170, 55);
  ctx.stroke();

  ctx.moveTo(210, 70);
  ctx.lineTo(160, 72);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(205, 88, 25, 130,0 * Math.PI);
  ctx.stroke();  

}

function click6() {
  ctx.beginPath();
  ctx.moveTo(200, 130);
  ctx.lineTo(200, 200);
  ctx.stroke();
}

function click7() {

  ctx.beginPath();
  ctx.moveTo(235, 270);
  ctx.lineTo(200, 200);
  ctx.lineTo(165, 270);
  ctx.stroke();
}

function click8() {
  ctx.beginPath();
  ctx.moveTo(155, 200);
  ctx.lineTo(200, 155);
  ctx.lineTo(245, 200);
  ctx.stroke();
}




function click9() {
  ctx.beginPath();
  ctx.arc(190, 95, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(210, 95, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(210, 112);
  ctx.lineTo(190, 115);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(195, 115, 5, 0, 1 * Math.PI);
  ctx.stroke();  

 //  c.style.backgroundColor = 'red';
  c.style.animation = 'shake 0.5s';
  c.style.animatioIiterationCount = 'infinite';
}

