import React, {useState} from 'react';
import './Login.scss';

function Login() {

  const [url, setUrl] = useState('');

  function hadleSubmit(e){
    e.preventDefault();
    setUrl(e.target.children.url.value)
    e.target.reset()
  }

  return (
    <>
      <form onSubmit={hadleSubmit}> 
        <input type='text' placeholder='enter url' name='url'/>
        {/* <input type='password' placeholder='password'/> */}
        <input type='submit' value='render'/>
      </form>
      {url? <img src={url} alt="cannot find"/> : null}
    
    </>
    
  )
}

export default Login
