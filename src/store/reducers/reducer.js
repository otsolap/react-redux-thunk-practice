import * as actionTypes from '../actions/actions'
import noteService from '../../services/note'

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return [...state, action.data];
        case actionTypes.INIT_NOTE:
            return action.data;
        default:
            return state;
    }
}

export const initNotes = () => {
    return async (dispatch) => {
        const notes = await noteService.getAll();
        dispatch({
            type: actionTypes.INIT_NOTE,
            data: notes
        })
    }
}

export const writeNote = (text) => {
    return async (dispatch) => {
        const newNote = await noteService.createNew(text);
        dispatch({
            type: actionTypes.ADD_NOTE,
            data: newNote
        });
    };
};

export default reducer;