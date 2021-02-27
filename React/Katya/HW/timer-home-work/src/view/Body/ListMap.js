import React from 'react';

import Notes from './Notes';

function ListMap(props) {
    const { notes } = props;

    return (
        <ul style={{display:'flex', flexDirection:'column', justifyContent: 'space-around'}}>
            {notes.map((note, index) => {
                return <Notes note={note} key={index}/>
            })}
        </ul>
    )
}

export default ListMap;