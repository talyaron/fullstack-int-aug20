const myUserName = 'Ka';
const myPassword = 1234;

function colorChange(e) {
    const color = e.target.value;
    document.body.style.backgroundColor = `${color}`;
    document.getElementById('mainColorLove').innerHTML = "You chose the color";
}

function chosenDate(e) {
    const dateB = e.target.value;
    document.getElementById('mainDateChosen').innerHTML = "Your birthday is " + `${dateB}`;
}

function hobbyText(e) {
    const textvalue = e.target.value;
    document.getElementById('mainTextText').innerHTML = "Your hobbies is " + `${textvalue}`;
}

function handleSub(e) {
    e.preventDefault();
    const usernName = e.target.children.Name.value;
    const password = e.target.children.Password.value;
    console.log(usernName, password);

    if (usernName == myUserName && password == myPassword) {
        alert('Login successfully');
    } else {
        alert('Login failed');
    }
}




// function but() {
//     const x = document.getElementById('inp').value;
//     document.getElementById('mainTextText').innerHTML = "youre hobbies are " + x;
// }