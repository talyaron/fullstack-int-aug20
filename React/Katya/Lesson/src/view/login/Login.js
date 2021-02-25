import React, { useState } from 'react'
import './Login.css'

//we can use const or useState to get the value of input;
const Login = props => {
    const { showLogin } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [backgroundColor, setbackgroundColor] = useState('red') //change color background form
    const [showForm, setShowForm] = useState(false); //change show form

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
    //     setUsername(e.target.value); //get username
    // }

    // function handlePassword(e) {
    //     setPassword(e.target.value); //get password
    // }

    function hendleShowForm() {
        setShowForm(!showForm); //get false or true of showForm
    }

    if (showLogin) {
        return (
            <div>
                <button onClick={hendleShowForm} style={{ marginBottom: '3%' }}>Show</button>
                {showForm ?
                    <div>
                        <form onSubmit={handleSubmit} style={{ background: backgroundColor }}>
                            <input
                                className='userAndPass'
                                type='text'
                                placeholder='username'
                                name='username'
                            // onKeyUp={handleUser}
                            />
                            <input
                                className='userAndPass'
                                type='password'
                                placeholder='password'
                                name='password'
                            // onKeyUp={handlePassword}
                            />
                            <button
                                className='buttonLogin'
                                type='submit'>
                                Login
                            </button>
                        </form>

                        <p>Choose the backgroung color of form</p>
                        <input
                            className='inputColor'
                            type='color'
                            onChange={handleColor}
                        />
                    </div>
                    : null}
            </div>
        )
    }
    else {
        return (
            <h2>No login</h2>
        )
    }

}

export default Login
