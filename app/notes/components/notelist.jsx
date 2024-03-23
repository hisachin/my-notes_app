'use client';

import { useContext, useEffect } from "react";
import { useNotes } from "../hooks/useNotes";
import { NoteContext } from "../contexts/noteContexts";

import NoteToolBar from "./notetoolbar";
import NoteCard from "./notecard";
import Spinner from "./spinner";
import { actionTypes } from "../reducer/notesReducer";

const NoteList = () => {
  const { loading, getNotes } = useNotes();
  const { state, dispatch } = useContext(NoteContext);

  const initialNotesRender = async () => {
    await getNotes();
    dispatch({ type: actionTypes.ADD_NOTE, payload: state.notes });
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
        <p className="text-md text-slate-500" >No Notes Created</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <NoteToolBar />

      <div className="h-screen w-52 md:w-64 p-4 mt-16 flex flex-col gap-4 bg-slate-100 border-e-2 overflow-y-auto">
        {loading && <Spinner />}
        {state.notes.length == 0 && renderNoteEmptyCard()}
        {state.notes.length > 0 && renderNoteCard()}
      </div>
    </div>
  )
}

export default NoteList;
