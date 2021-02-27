import React, { useState } from 'react';

function Notes(props) {
    const { note, index } = props;
    
    // const [color, setColor] = useState('black')

    // let date = new Date();
    // let timeCorrect = date.toTimeString()
    // let dateCorrect = date.toDateString();

    // function timeOut() {
    //     if(timeCorrect  > note.time  || dateCorrect > note.time) {
    //         setColor('red')
    //     }
    // }

    // setTimeout(timeOut, 1000)


    // function timeOut() {
    //     let date = new Date();
    //     let timeCorrect = date.toTimeString()
    //     let dateCorrect = date.toDateString();

    //     console.log(timeCorrect)
    //     console.log(dateCorrect)

    // if (timeCorrect > note.time) {
    //     setColor('red')
    // } 

    // if (dateCorrect > note.date) {
    //     setColor('red')
    // }else {
    //     setColor('black')
    // }


    // }

    // setTimeout(timeOut, 1000)


    //----Cross the row----//
    const [cross, setCross] = useState('none')

    function handleCross() {
        if (cross === 'none') {
            setCross('line-through')
        } else if (cross === 'line-through') {
            setCross('none')
        }
    }

    //----Delete the row---//
    const [done, setDone] = useState('grid')

    function handleDelete() {
        if (done==='grid') {
            setDone('none')
        }
    }

    return (
        <li key={index} style={{ textDecoration: cross, display:done, gridTemplateColumns:'repeat(5, 1fr)'}}>
            <span>{note.text}</span> <span>{note.date}</span> <span>{note.time}</span>
            <input
                type="checkbox"
                onClick={handleCross}
            />
            <input
                type="button"
                value="done"
                onClick={handleDelete}
            />
        </li>
    )
}

export default Notes;