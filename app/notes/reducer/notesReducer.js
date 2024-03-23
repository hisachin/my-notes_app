export const actionTypes = {
    ADD_NOTE: 'ADD_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',
    UPDATE_NOTE: 'UPDATE_NOTE',
    SELECT_NOTE: 'SELECT_NOTE',
};

export const initialNoteDetails = {
    clearRichText: false,
    selectedNote: null,
    notes: []
};


export const notesReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                notes: [...payload, ...state.notes],
                clearRichText: true
            }
        case actionTypes.SELECT_NOTE:
            return {
                ...state,
                selectedNote: payload
            }
        case actionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== payload),
                selectedNote: null,
            }
        case actionTypes.UPDATE_NOTE:
            let newNotes = state.notes.map((note) => {
                if (note.id == payload.id) {
                    return payload
                } else {
                    return note;
                }
            });
            return {
                ...state,
                notes: newNotes,
                clearRichText: false
            }
        default:
            throw new Error(`No case for type ${type} found in notesReducer.`);
    }
}