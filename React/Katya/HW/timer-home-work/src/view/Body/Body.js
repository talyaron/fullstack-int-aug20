import React, { useState } from 'react';

import ListMap from './ListMap';

function Body() {

    const [notes, setNotes] = useState([
        { id: '0', text: 'Go to sleep', date:'2021-02-25', time: '03:29'  },
        { id: '1', text: 'Dance', date:'2021-02-25', time: '05:15' }
        ]
    )

    function writeNote(e) {
        e.preventDefault();

        const notesAdd = e.target.children.notes.value;
        const noteDate = e.target.children.date.value;
        const notesTime = e.target.children.time.value;
        

        console.log(notesAdd, notesTime)

        setNotes([...notes, {
            id: notes.length,
            text: notesAdd,
            time: notesTime,
            date: noteDate,
            done: false
        }])

        e.target.reset();
    }

    return (
        <div>
            <div>
                <form onSubmit={writeNote}>
                    <input
                        type='text'
                        placeholder='Write what you want to do'
                        name='notes'
                    />
                    <input
                        type='date'
                        name='date'
                    />
                    <input
                        type='time'
                        name='time'
                    />
                    
                    <input
                        type='submit'
                        value='Send'
                    />
                </form>
            </div>

            <div>
                <ListMap notes={notes} />
            </div>
        </div>
    )
}

export default Body;

