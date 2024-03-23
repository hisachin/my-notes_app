import { useContext, useState } from "react";
import axios from "axios";

import { NoteContext } from "../contexts/noteContexts";
import { actionTypes } from "../reducer/notesReducer";
import { addNote, getAllNotes, deleteNote, updateNote  } from "../utils/indexedDB";

export const useNotes = () => {
    const {state,dispatch} = useContext(NoteContext);
    const [loading,setLoading] = useState(true);
    const [notes,setNotes] = useState(state.notess);
    const [note,setNote] = useState(null);

    const getNotes = async () => {
        try {
            setLoading(true);
            const data = await getAllNotes();
            if(data){
                setNotes(data);
                dispatch({type:actionTypes.ADD_NOTE,payload:data});
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

    const addNotes = async(data) => {
        if(data.id){
            addNote(data).then((id) => console.log(`Note added to IndexedDB ${id}`)).catch((e) => (console.log(e)));
        }
    }

    const deleteNoteById = async (noteId) => {
        if(noteId){
            deleteNote(noteId).then((id) => console.log(`Note deleted from IndexedDB ${id}`)).catch((e) => (console.log(e)));
        }
    }

    const updateNoteData = async (data) => {
        if(data.id){
            updateNote(data.id,data).then((id) => console.log(`Note updated from IndexedDB ${id}`)).catch((e) => (console.log(e)));
        }
    }

    return {
        loading,
        setLoading,
        note,
        notes,
        getNotes,
        getNote,
        addNotes,
        deleteNoteById,
        updateNoteData
    }
}