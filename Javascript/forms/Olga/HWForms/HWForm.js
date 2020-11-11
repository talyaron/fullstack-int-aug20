function handleChange(e){
    const color = e.target.value
    console.log(color)
    document.body.style.backgroundColor = color

}

const myLogin = 'OlgaPan'
const myPassword = 'opan1601'

function handleSubmit(e){
    e.preventDefault();

    console.log(e)

    const login = e.target.children.login.value;
    const password = e.target.children.password.value;

    console.log(login, password);

    if(login === myLogin && password === myPassword){
        alert('login and password are correct!')
    } else if(login !== myLogin && password === myPassword){
        alert('login is not correct!')
    } else if(login === myLogin && password !== myPassword){
        alert('password is not correct!')
    } else if(login !== myLogin && password !== myPassword){
        alert('login and password are not correct!')
    }

    
}