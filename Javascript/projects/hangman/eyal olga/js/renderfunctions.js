<<<<<<< HEAD
function renderCategories(){
    creatCategoriesArray();
    const BodyContainer = document.querySelector('.categorysContainer');
    let NewBodyContainer = '';
      categories.forEach((category) => {
        const word = `<h1>${category.category}</h1>`;
      NewBodyContainer += word;
    })
    BodyContainer.innerHTML = NewBodyContainer;
}

render
=======
const keys = document.querySelectorAll(".keyscontainer h1");
const TextBody = document.querySelector('#TextBody');
const TextHeader = document.querySelector(`#TextHeader`);
const hammer = document.getElementById(`hammer`);
const person = document.querySelector(`#person`);
const maxNumberofStraiks = 6;
let word = {};
let Straiks = 0;
TextHeader.innerHTML="";

for (let i=0 ; i < maxNumberofStraiks; i++ ){

  TextHeader.innerHTML += `<span class="material-icons" style="color: red;">favorite</span>`;
}

keys.forEach(key => {
  key.addEventListener("click", function () {
   
    starGuessing(key.innerHTML);    
  });
})

function checkStraiks(Straiks) {
  if (Straiks <= maxNumberofStraiks) {
    console.log("in te game")
    return true;
  } else {
    console.log("game over");
    TextBody.innerHTML = '<h1>Game Over</h1>'
    return false;
  }
}

function checkForMach(key) {
  
  
  let resolute = false; 
   for (let i = 0; i < word.length; i++) {
         
    if (word[i].toUpperCase() === key.toUpperCase()) {
      let letter = document.querySelector(`#letter${i}`)
      let livesLeft = maxNumberofStraiks - Straiks;
      letter.innerHTML = key;  /* הצגת האות במקום הנכון */
      resolute = true;
      
    } 
    
  }
  

  return resolute;
}

function starGuessing(key){
  if (checkForMach(key)== false){
    TextHeader.innerHTML = '';
    
    Straiks++; 
    let livesLeft = maxNumberofStraiks - Straiks;
for (let i=0 ; i < livesLeft; i++ ){

  TextHeader.innerHTML += `<span class="material-icons" style="color: red;">favorite</span>`;
  /* יש להוסיף כאן קלאס אנימציה */
  hammer.animate({
    transform:['rotate(0deg)','rotate(-60deg)'],
    transform:['rotate(-60deg)','rotate(0deg)']
  },300);
  person.animate({
    transform:['translate(0px, 12%)']
  },300);


  }};
  if (Straiks >= maxNumberofStraiks) {
    console.log('game over');
    TextBody.innerHTML='';
    TextBody.innerHTML += `<h1>G</h1>`;
    TextBody.innerHTML += `<h1>A</h1>`;
    TextBody.innerHTML += `<h1>M</h1>`;
    TextBody.innerHTML += `<h1>E</h1>`;
    TextBody.innerHTML += `<h1> </h1>`;
    TextBody.innerHTML += `<h1>O</h1>`;
    TextBody.innerHTML += `<h1>V</h1>`;
    TextBody.innerHTML += `<h1>E</h1>`;
    TextBody.innerHTML += `<h1>R</h1>`;
    
  }
  

}


/*---------------------- renders ------------------*/


function renderwordscrean() {
  /* get word from local */
  let b = sessionStorage.getItem('rendomWordObj');
  b = JSON.parse(b);
  TextBody.innerHTML = '';
  word = b.word;
  console.log(word);

  for (var i = 0; i < word.length; i++) {
    TextBody.innerHTML += `<h1 id="letter${i}"></h1>`;
  }
}

function renderCategories() {
  creatCategoriesArray();
  var BodyContainer = document.querySelector('.categorysContainer');
  var NewBodyContainer = '';
  categories.forEach(function (category) {
    var word = "<h1 onclick=\"oncategoryclick(event)\">".concat(category.category, "</h1>");
    NewBodyContainer += word;
  });
  BodyContainer.innerHTML = NewBodyContainer;
}
>>>>>>> eyal
