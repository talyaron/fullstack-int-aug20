const targetDiv = document.querySelector("#testDiv");

targetDiv.addEventListener('click',eventTest=>{
    console.log("clicked");
    eventTest.target.style.margin = '100px';
});

targetDiv.addEventListener('dblclick',eventTest=>{
    console.log("dblclick");
    eventTest.target.style.margin = '300px';
});