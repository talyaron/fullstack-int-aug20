function creatBox(e){
  document.querySelector('.output').innerHTML += `${e.target.outerHTML}`;
  let arrey = document.querySelector('.output').children;
  for(let i of arrey){
    i.onclick= '';
    i.style.cursor = 'auto';
  } 
}