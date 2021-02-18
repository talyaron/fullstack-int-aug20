import React, { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [color, setColor] = useState('red')
    const [imgURL, setImg] = useState('http://www.google.com/logos/2008/olympics08_basketball.gif')


    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(e.target.children.username.value)
        setPassword(e.target.children.password.value)
        console.log(username, password)
    }

    const changeColor = (e) => {
        setColor(e.target.value)
    }
    const changeImg = (e) => {
        e.preventDefault()

        setImg(e.target.children.img.value)
    }

    return (
        <div className='form' style={{ background: color }}>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder="Username" />
                <input type='text' name='password' placeholder="Password" />
                <button>Submit</button>
            </form>

            <input type='color' onChange={changeColor} />

            <form onSubmit={changeImg}>
                <input type='text' name='img' placeholder='URL' />
                <button>Submit new IMG</button>
            </form>
            <img src={imgURL} />

        </div>

    )
}

export default Login;