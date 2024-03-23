import { useContext, useState } from "react";
import axios from "axios";

import { NoteContext } from "../contexts/noteContexts";
import { actionTypes } from "../reducer/notesReducer";

export const useNotes = () => {
    const {state,dispatch} = useContext(NoteContext);
    const [loading,setLoading] = useState(true);
    const [notes,setNotes] = useState(state.notess);
    const [note,setNote] = useState(null);

    const getNotes = async () => {
        try {
            setLoading(true);
            const data = await axios.get('/api/notes');
            if(data){   
                setNotes(data.data.data);
                dispatch({type:actionTypes.ADD_NOTE,payload:data.data.data});
            }
          } catch (error) {
            console.log(error)
          } finally {
           setLoading(false)
          }
    }

    const getNote = async (noteId) => {
        if(!noteId){
            setNote(null);
            return;
        };
        setNote(state.notes.filter(note => note.id === noteId)[0]);
    }

    return {
        loading,
        setLoading,
        note,
        notes,
        getNotes,
        getNote
    }
}