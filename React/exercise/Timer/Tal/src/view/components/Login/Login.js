import React, { useState } from 'react';
import './Login.css';

// let username, password;

const Login = props => {

    const {showLogin} = props;
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [color, setColor] = useState('');
    const [showForm, setShowForm] = useState(false)

    function handleSubmit(e) {
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

    function handleColor(e) {
        setColor(e.target.value)
    }

    function handleShowForm() {
        setShowForm(!showForm);
    }

    if(showLogin){

    return (
        <div>
            <button onClick={handleShowForm}>Show</button>
            {showForm ?
                <form onSubmit={handleSubmit} style={{ background: color }}>
                    <input type='text' placeholder='username' name='username' />
                    <input type='password' placeholder='password' name='password' />
                    <button type='submit'>Login</button>
                </form>
                :
                null
            }
            <input type='color' onChange={handleColor} />
        </div>
    )}
    else {
        return (<h2>No login</h2>)
    }
}

export default Login;

