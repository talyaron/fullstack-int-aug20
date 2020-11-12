const theBox = document.getElementById("mainDiv");
console.log(theBox);


function colorChangeFunc(event){
    event.preventDefault();
    const color = document.getElementById("inputColorFromUser").value;
    colorConfig=color;
    theBox.style.background=`${color}`;
}


const rightUserName = 'Yehial';
const rightPassword = '145236';

function userNameAndPasswordCheck(event){
    event.preventDefault();
    const userNameInput = document.getElementById("userNameInput").value;
    const userPassword = document.getElementById("userPassword").value;
    

    if(rightPassword == userPassword &&  rightUserName == userNameInput){
        
        const tag=document.getElementById("userInterFace");
        tag.innerHTML='';
        tag.innerHTML+='--------Access Granted-----------';
        console.log(tag)
    }
    else{
        const tag=document.getElementById("userInterFace");
        tag.innerHTML='';
        tag.innerHTML+='--------Access Denied-----------';
        console.log('no');
    }
}

