import * as actionTypes from '../actions/actions'
import noteService from '../../services/note'

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return state.concat({
                id: action.id + 1,
                text: action.text,
                completed: false
            });
        case actionTypes.INIT_NOTE:
            return action.data;

        default:
            return state;
    }
}

export const initNotes = () => {
    return async (dispatch) => {
        const notes = await noteService.getAll();
        dispatch({ type: actionTypes.INIT_NOTE, data: notes })
    }
}

export default reducer;