'use client';
import { useContext } from "react";
import { LuPlusSquare, LuSearch } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

import { NoteContext } from "../contexts/noteContexts";
import { actionTypes } from "../reducer/notesReducer";
import { useNotes } from "../hooks/useNotes";

const NoteToolBar = () => {
  const { addNotes,deleteNoteById } = useNotes();
  const { state, dispatch } = useContext(NoteContext);

  const handleAddNote =  async () => {
    const noteId = uuidv4();
    const noteData = { id: noteId, title: `New note title`, description: `New note title` };
    await addNotes(noteData);
    dispatch({ type: actionTypes.ADD_NOTE, payload: [noteData] });
    dispatch({ type: actionTypes.SELECT_NOTE, payload: noteId });
  }
  const handleDeleteNote = async () => {
    await deleteNoteById(state.selectedNote);
    dispatch({ type: actionTypes.DELETE_NOTE, payload: state.selectedNote })
  }

  return (
    <div className="h-16 w-52 md:w-64 p-4 rounded-tl-lg rounded-tr-lg shadow-sm flex flex-row gap-2 justify-center items-center bg-white text-gray-900 top-0 fixed">
      <div className="cursor-pointer" onClick={handleAddNote}><LuPlusSquare /></div>
      <div className="cursor-pointer" onClick={handleDeleteNote} ><RiDeleteBinLine /></div>
      <div className="cursor-pointer"><LuSearch /></div>
    </div>
  )
}

export default NoteToolBar;
