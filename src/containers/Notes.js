import React from 'react'
import { useSelector } from 'react-redux';

const Notes = () => {
    const notes = useSelector((state) => state);

    return (
        <div>
            <h2>Add new Note.</h2>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>{note.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Notes;