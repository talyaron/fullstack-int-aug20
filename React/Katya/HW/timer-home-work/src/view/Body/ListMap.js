import React from 'react';

import Notes from './Notes';

function ListMap(props) {
    const { notes } = props;

    return (
        <ol>
            {notes.map((note, index) => {
                return <Notes note={note} key={index}/>
            })}
        </ol>
    )
}

export default ListMap;