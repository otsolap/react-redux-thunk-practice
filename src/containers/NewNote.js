import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions/actions'

const NewNote = () => {
    const notes = useSelector(state => state);
    // kun () tietää että kyseessä funktio
    const dispatch = useDispatch();
    let i = notes.length;


    const addNote = (text) => ({
        type: actionTypes.ADD_NOTE,
        id: i++,
        text: text
    })


    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                dispatch(addNote(event.target.notes.value));
                event.target.notes.value = ""
            }}>
                <h2>Enter your notes here:</h2>
                <input name="notes" />
                <button type="submit">Add note. </button>
            </form>
        </div >
    )
}

export default NewNote;