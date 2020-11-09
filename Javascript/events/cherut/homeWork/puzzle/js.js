const filla = document.querySelector('.filla');
const fillb = document.querySelector('.fillb');
const fillc = document.querySelector('.fillc');
const filld = document.querySelector('.filld');
const empties = document.querySelectorAll('.empty');


 
const finish =`
<div class="puzzle">
    <div class="up">
      <div class="empty pic a filla"></div>
      <div class="empty pic b fillb"></div>
    </div>
    <div class="down">
      <div class="empty pic d filld"></div>
      <div class="empty pic c fillc"></div>
    </div>
  </div>`
  ;


filla.addEventListener('dragstart', dragStart);
filla.addEventListener('dragend', dragEnd);

fillb.addEventListener('dragstart', dragStart);
fillb.addEventListener('dragend', dragEnd);

fillc.addEventListener('dragstart', dragStart);
fillc.addEventListener('dragend', dragEnd);

filld.addEventListener('dragstart', dragStart);
filld.addEventListener('dragend', dragEnd);


for(const empty of empties){
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

let now = '';

function dragStart(e){
  now = e.target.className;
  console.log(now);
  console.log('e');
  // e.target.className += ' hold'
  // e.target.className = 'invisible';

  setTimeout(() => {
    e.target.className = 'invisible'
  }, 0.1);
  
}

function dragEnd(e){
  console.log('end');
  e.target.className = 'fill';
}

function dragOver(e){
  e.preventDefault();

}

function dragEnter(e){
  e.preventDefault();
  // this.className += ' hovered';
}

function dragLeave(){
  // this.className = 'empty';
}

function dragDrop(){
  this.className = 'empty ';
  this.className += now;
  // this.target.style = 'top:0px';
 
//   let finish = `
//   <div class="puzzle">
//   <div class="up">
//     <div class="empty pic a filla"></div>
//     <div class="empty pic b fillb"></div>
//   </div>
//   <div class="down">
//     <div class="empty pic d filld"></div>
//     <div class="empty pic c fillc"></div>
//   </div>
// </div>
//  ` 
const puzzle = document.querySelector('.puzzle') ;
// console.log(puzzle);
// console.log(finish);

for(let i of empties){
  console.log(i.className)
  if(i.className =='pic'){
    console.log('שווווה')
  }
}

 if(puzzle == finish){
  console.log('סיימתי');
 }else{
  console.log('נכשלת');
 }
   
   
 

  // this.append(now);

}

const row = document.querySelector('#row');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const result = document.querySelector('.result');

function sur(){
 
  let deg = Math.random()*1800;
  console.log(deg);
  row.style.transform =`rotate(${deg}deg)`;

 
  if(0<deg && deg<90 || 360<deg && deg<450 || 720<deg && deg<810 || 1080<deg && deg<1170 || 1440<deg && deg<1530){
    console.log('כחול');
    setTimeout(() => {
      blue.style.backgroundColor = 'blue';
      result.innerHTML = 'כחול';
    }, 2100);
    setTimeout(() => {
      blue.style.backgroundColor = 'rgba(0, 0, 255, 0.514)';
      result.innerHTML = '';
    }, 3200);


  }else if(90<deg && deg<180 || 450<deg && deg<540 || 810<deg && deg<900 || 1170<deg && deg<1260 || 1530<deg && deg<1620){
    console.log('אדום');
    setTimeout(() => {
      red.style.backgroundColor = 'red';
      result.innerHTML = 'אדום';
    }, 2100);
    setTimeout(() => {
      red.style.backgroundColor = 'rgba(255, 0, 0, 0.493)';
      result.innerHTML = '';
    }, 3200);

  }else if(180<deg && deg<270 || 540<deg && deg<630 || 900<deg && deg<990 || 1260<deg && deg<1350 || 1620<deg && deg<1710){
    console.log('ירוק');
    setTimeout(() => {
      green.style.backgroundColor = 'green';
      result.innerHTML = 'ירוק';
    }, 2100);
    setTimeout(() => {
      green.style.backgroundColor = ' rgba(0, 128, 0, 0.514)';
      result.innerHTML = '';
    }, 3200);

  }else if(270<deg && deg<360 || 630<deg && deg<720 || 990<deg && deg<1080 || 1350<deg && deg<1440 || 1710<deg && deg<1800){
    console.log('צהוב');
    setTimeout(() => {
      yellow.style.backgroundColor = 'yellow';
      result.innerHTML = 'צהוב';
    }, 2100);
    setTimeout(() => {
      yellow.style.backgroundColor = ' rgba(255, 255, 0, 0.507)';
      result.innerHTML = '';
    }, 3200);
  }
 
}

function fun(event){
  console.log('נפתח');
  event.target.src = 'box4.png';

}

// event.target.addEventListener(mouseleave, close);
function ccc(event){
  console.log('עזב');
  event.target.src = 'box2.png';
}

// 0-90 כחול
// 90-180 אדום
// 180-270 ירוק 
// 270-360 צהוב