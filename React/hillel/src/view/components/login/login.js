import React, {useState} from 'react';
import './login.css';

const Login = () => {
const [text, settext] = useState();

    function handleSubmit(e){
        e.preventDefault();

        const valuetext = e.target.children.texttext.value;

        console.log(valuetext);
        settext(valuetext);
        e.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='הוסף כתובת קישור' name='texttext'  /><br/>
                <button type='submit'>אישור</button>
            </form>
            <img src={text}/>
        </div>
    )
}

export default Login;

