import React, { useState } from 'react'
import Title from '../Login/Login'

const Login = () => {

    const [login, setLogin] = useState('')

    function handleLogin(e) {
        e.preventDefault();

        const name = e.target.children.name.value;

        setLogin(name)
        e.target.reset();

    }
    
    return (
        <div>
            <h1>Welcome</h1>
            <h2>For get in enter youre name</h2>

            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    placeholder='Enter youre name'
                    name='name'
                />
                <input
                    type='submit'
                    value='Send'
                />
            </form>

            {/* <Title login={login} /> */}
        </div>
    )
}

export default Login;
