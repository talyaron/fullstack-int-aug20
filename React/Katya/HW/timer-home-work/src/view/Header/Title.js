import React, { useState } from 'react'

function Title() {

    const [title, setTitle] = useState('Choose your title')

    function hendleChangeTitle(e) { //Choosing title
        e.preventDefault();

        const changeTitle = e.target.children.changeTitle.value;

        setTitle(changeTitle)
        console.log(changeTitle)
    }

    return (
        <div>
            <form onSubmit={hendleChangeTitle}> {/* form of change title */}
                <input
                    type="text"
                    placeholder="Change the title"
                    name="changeTitle"
                />
                <input
                    type="submit"
                    value="Change"
                />
            </form>
            <h1
                style={{
                    width: "50%",
                    margin: "5% auto"
                }}
            >{title}</h1>
        </div>
    )
}

export default Title;
