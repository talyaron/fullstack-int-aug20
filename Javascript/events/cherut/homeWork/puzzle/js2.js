const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

for(const fill of fills){
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
}

for(const empty of empties){
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

let now = '';


function dragStart(e){
  now = e.target;
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
  // this.className = 'empty';
  this.append(now);

}