import React, { useState } from 'react'

import Title from '../Header/Title'
import Body from '../Body/Body'

import './dist/login.css'

const Login = () => {
    const [login, setLogin] = useState('')
    const [showForm, setShowForm] = useState(true); //change show form
    const [hideForm, setHideForm] = useState(false);
    const [showThank, setShowThank] = useState(false);

    function handleLogin(e) {
        e.preventDefault();

        const name = e.target.children.name.value;

        setLogin(name)
        e.target.reset();

        setShowThank(!showThank)
    }

    function hendleShowForm() {
        setShowForm(!showForm);
        setHideForm(!hideForm); //get false or true of showForm
    }

    return (

        <div className='main'>
            {showForm ?
                <div>
                    <h1 className='mainWelcome'>Welcome</h1>
                    <h2 className='mainWelcome__h2'>For get in
                    enter youre name</h2>

                    <form onSubmit={handleLogin}>
                        <input
                            type='text'
                            placeholder='Enter youre name'
                            name='name'
                            className='mainInput'
                        />
                        <input
                            type='submit'
                            value='Send'
                            className='mainSubmit'
                        />

                        {showThank ?
                        <p className='mainThank'>Thank you {login}</p>
                    :null}

                        
                        <input
                            type='submit'
                            value='Get in'
                            className='mainGetIn'
                            onClick={hendleShowForm}
                        />
                    </form>
                </div>
                : null}

            {hideForm ?
                <div>
                    <Title login={login} />
                    <Body />
                </div>
                : null}
        </div>
    )
}

export default Login;
