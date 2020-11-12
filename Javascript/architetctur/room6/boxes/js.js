function creatBox(e){
  document.querySelector('.output').innerHTML += `${e.target.outerHTML}`;
}