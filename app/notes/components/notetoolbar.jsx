'use client';
import { useContext } from "react";
import { LuPlusSquare,LuSearch } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

import { NoteContext } from "../contexts/noteContexts";
import { actionTypes } from "../reducer/notesReducer";

const NoteToolBar = () => {
    const {state,dispatch} = useContext(NoteContext);

    const handleAddNote = () => {
        const noteId = uuidv4();
        dispatch({type:actionTypes.ADD_NOTE,payload:[{id:noteId, title:`New note title`, description:`New note title`}]});
        dispatch({ type: actionTypes.SELECT_NOTE, payload:noteId });
    }
    const handleDeleteNote = () => {
        dispatch({type:actionTypes.DELETE_NOTE,payload:state.selectedNote})
    }

    return (
      <div className="h-16 p-4 bg-white rounded-lg shadow-sm flex flex-row gap-2 items-center">
        <div className="cursor-pointer" onClick={handleAddNote}><LuPlusSquare/></div>
        <div className="cursor-pointer" onClick={handleDeleteNote} ><RiDeleteBinLine/></div>
        <div className="cursor-pointer"><LuSearch/></div>
      </div>
    )
  }
  
  export default NoteToolBar;
  