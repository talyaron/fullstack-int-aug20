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

const alfabeta = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'q', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x','y','z' ];

let root = document.querySelector('#root');
let html = '';

alfabeta.forEach(sign =>{
   html += `<button class='button' data-sign="${sign}">${sign}</button>`;
})
root.innerHTML += html;


let letters = document.querySelector('#letters');

let html2 = '';
for (var i = 0; i < chosenWord.length; i++) {
  let letter = chosenWord.charAt(i)
  html2 += `<div id='${letter}'></div>`
}
letters.innerHTML = html2;

let buttons = document.querySelectorAll('.button');
buttons.forEach(button=>{
  let clickLater= button.dataset.sign
  button.addEventListener('click',filterLeter => {
    //let searchTerm = clickLater.target.value
  let regSearchTerm = new RegExp(clickLater,'g');
  if(regSearchTerm.test(chosenWord)){
    console.log('yes')
} else {
    console.log("no")}
  })
  //console.log(button.dataset.sign)
})


//function filterLeter (clickLater){
  //let searchTerm = clickLater.target.value
 // let regSearchTerm = new RegExp(clickLater,'g');
  //if(regSearchTerm.test(chosenWord)){
//console.log('no')
//} else {
//    console.log("yes")
//}
//}

