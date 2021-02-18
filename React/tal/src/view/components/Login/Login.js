import React, {useState} from 'react';
import './Login.css';

// let username, password;

const Login = () => {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
const [color, setColor] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        const username = e.target.children.username.value;
        const password = e.target.children.password.value;

        console.log(username, password);
        e.target.reset();

    }

    // function handleUser(e){
    //     setUsername(e.target.value);
    // }

    // function handlePassword(e){
    //     setPassword(e.target.value)
    // }
    
    function handleColor(e){
        setColor(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{background:color}}>
                <input type='text' placeholder='username' name='username'  />
                <input type='password' placeholder='password' name='password'/>
                <button type='submit'>Login</button>
            </form>
            <input type='color' onChange={handleColor}/>
        </div>
    )
}

export default Login;

