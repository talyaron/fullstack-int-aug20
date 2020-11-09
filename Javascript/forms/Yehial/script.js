// let testEventDiv =document.getElementById("testBox");
// console.log(testEventDiv);
// let config='width:800px;height:800px;';

// testEventDiv.addEventListener('click',(event)=>{
//     console.log(event);
//     event.target.style=config;
// })


//Forms
let boxHtml =document.getElementById('testBox');
console.log(boxHtml);
let test='';

let nameInputFromUser = document.getElementById("inputName");
let surnameInputFormUser = document.getElementById("inputSurname");

function handleInputName(e){
    
    // console.log(e.target.value);
    test+=(e.target.value +' ');
    console.log(test);

}

function handleInputSurname(e){
    test+=(e.target.value);
    console.log(test);
}

function addUserFunc(){

    console.log(test);
    boxHtml.innerHTML+=`<div>${test}</div>`;
    test='';

}