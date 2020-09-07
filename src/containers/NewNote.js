import React from 'react'
import { useDispatch } from 'react-redux';
import { writeNote } from '../store/reducers/reducer'

const NewNote = () => {
    // kun () tietää että kyseessä funktio
    const dispatch = useDispatch();


    const addNote = async (event) => {
        event.preventDefault();
        const text = event.target.notes.value;
        event.target.notes.value = "";
        dispatch(writeNote(text));
    };


    return (
        <div>
            <form onSubmit={addNote}>
                <h2>Enter your notes here:</h2>
                <input name="notes" />
                <button type="submit">Add note. </button>
            </form>
        </div >
    )
}

export default NewNote;