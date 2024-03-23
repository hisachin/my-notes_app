'use client';

import { useContext, useEffect, useState } from "react";
import { useNotes } from "../hooks/useNotes";
import { NoteContext } from "../contexts/noteContexts";
import RichTextEditor from "./richTextEditor";
import { actionTypes } from "../reducer/notesReducer";

import { getFirstLine } from "../utils/parseHtml";


const NoteText = () => {
    const { updateNoteData } = useNotes();
    const { state,dispatch } = useContext(NoteContext);
    const [content,setContent] = useState("");
    const [showRichText,setShowRichtText] = useState(false);

    const handleContentChange = async (newContent) => {
        const newNotes = {
            id:state.selectedNote,
            title:getFirstLine(newContent),
            description: newContent
        }
        dispatch({type:actionTypes.UPDATE_NOTE,payload:newNotes});
        await updateNoteData(newNotes);
    };

    const updateNoteContent = async () => {
        if(state.selectedNote){
            setShowRichtText(true);
            setContent(state.notes.filter(note => note.id === state.selectedNote)[0].description);
        }
    }

    useEffect(() => {
        updateNoteContent();  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.selectedNote]);

    return (
        <div className="h-screen w-full p-4 bg-white rounded-lg shadow-sm cursor-text overflow-auto">
            {showRichText && <RichTextEditor initialContent={content} onContentChange={handleContentChange} />}
            {!showRichText && <>No Note Selected</>}
        </div>
    )
}

export default NoteText;
