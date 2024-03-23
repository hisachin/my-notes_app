'use client';

import { useContext, useEffect } from "react";
import { useNotes } from "../hooks/useNotes";
import { NoteContext } from "../contexts/noteContexts";

import NoteCard from "./notecard";
import Spinner from "./spinner";
import { actionTypes } from "../reducer/notesReducer";

const NoteList = () => {
  const { loading, getNotes } = useNotes();
  const {state,dispatch} = useContext(NoteContext);

  const initialNotesRender = async () => {
    await getNotes();
    dispatch({type:actionTypes.ADD_NOTE,payload:state.notes});
  }

  useEffect(() => {
    initialNotesRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderNoteCard = () => {
    return (
      state.notes.map((note, index) => <NoteCard key={index} note={note} />)
    )
  }

  const renderNoteEmptyCard = () => {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <p>No Notes Created</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-1/4 p-4 flex flex-col gap-4 bg-slate-100 border-e-2 overflow-y-auto">
      {loading && <Spinner/>}
      {state.notes.length == 0 && renderNoteEmptyCard()}
      {state.notes.length > 0 && renderNoteCard()}
    </div>
  )
}

export default NoteList;
