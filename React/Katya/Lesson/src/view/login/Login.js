import React, { useState } from 'react'
import './Login.css'

//we can use const or useState to get the value of input;
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [backgroundColor, setbackgroundColor] = useState('red')

    function handleSubmit(e) {
        e.preventDefault();

        const username = e.target.children.username.value;
        const password = e.target.children.password.value;

        console.log(username, password)
        e.target.reset(); //reload the form
    }

    function handleColor(e) {
        setbackgroundColor(e.target.value)
    }

    // function handleUser(e) {
    //     setUsername(e.target.value);
    // }

    // function handlePassword(e) {
    //     setPassword(e.target.value);
    // }


    return (
        <div>
            <form onSubmit={handleSubmit} style={{ background: backgroundColor }}>
                <input
                    type='text'
                    placeholder='username'
                    name='username'
                // onKeyUp={handleUser}
                />
                <input
                    type='password'
                    placeholder='password'
                    name='password'
                // onKeyUp={handlePassword}
                />
                <button
                    type='submit'>
                    Login
                </button>
            </form>
            <input
                type='color'
                onChange={handleColor}
            />
        </div>
    )
}

export default Login
