const nameInput = document.querySelector(".name");
const passInput = document.querySelector(".password");
const btnSubmit = document.querySelector(".submit");
let root = document.querySelector('.root');

// let form = document.querySelector('.form');
function keypress(e){
  
    if(e.keyCode=='13'){ //Keycode for "Return"
      e.preventDefault();
      console.log(e.target.nextElementSibling.children.pass)
      e.target.nextElementSibling.children.pass.focus();
    }
    // btnSubmit.Clickable = 'true';
};



function handleSubmit(e){
  try {
    e.preventDefault();
    let name = e.target.children.name.value;
    let pass = e.target.children[3].children.pass.value;
    let user = {name, pass};
    console.log(user);
  
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    })
        .then(res => res.json())
        .then(data => {
          // console.log(data.ok)
          if(data.ok){
            location.replace("/home.html");
          } else {
            let root = document.querySelector('.root');
            root.innerHTML =    'login failed <button onclick="cleanInputs(event)" class="submit">try again</button>'; 
            // root.innerHTML += ;
          
          }
        })
  } catch (e) {
      console.error(e)
  }
}


function showPass(event){

  passInput.type = "text";
  event.target.style.cursor = 'pointer'
 
}

function hidePass(event){
  passInput.type = "password";
   
}

function cleanInputs(e){
  passInput.value = '';
  nameInput.value = '';
  root.innerHTML ='';
}
