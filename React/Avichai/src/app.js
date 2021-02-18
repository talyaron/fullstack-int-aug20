import React, { useState } from 'react';
import Login from './view/components/Login/login'

const App = () => {

    const [showBigForm, setShowForm] = useState(false)

    const handleShowForm = () => {
        setShowForm(!showBigForm)
    }
    return (
        <div className="App">
            <button onClick={handleShowForm}>Show Form</button>
            <Login showBigForm={showBigForm} />
        </div>
    );
}


export default App