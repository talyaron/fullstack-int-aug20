function getJoke() {
    fetch('/get-joke')
    .then(response => response.json())
    .then(data => {
        document.getElementById('root').innerText = `${data.joke}`
    })
}
  
getJoke();

let myloop = setInterval(getJoke, 2000);

let pouse = false;

function stop(){
    if(pouse==false){
        console.log('jh')
        clearInterval(myloop);
        pouse = true ;
    }else{
        pouse=false
        getJoke();
        setInterval(getJoke, 1000);
    }

    
   
}