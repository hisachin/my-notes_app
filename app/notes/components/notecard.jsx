
import { useContext } from "react";
import parse from 'html-react-parser';

import { actionTypes } from "../reducer/notesReducer";
import { NoteContext } from "../contexts/noteContexts";

import { getFirstLine, getSecondLine } from "../utils/parseHtml";

const NoteCard = ({note}) => {
    const { state, dispatch  } = useContext(NoteContext);

    const hadleNoteCardClick = () => {
        dispatch({ type: actionTypes.SELECT_NOTE, payload: note.id });
    }

    return (
        <div className={`max-h-32 w-full rounded-lg shadow-sm cursor-pointer ${state.selectedNote == note.id ? 'bg-slate-200': 'bg-white'}`} data-note-id={note.id} onClick={hadleNoteCardClick}>
            <div className="px-4 py-2">
                <h3 className="text-sm font-bold text-gray-800 mb-2 truncate">{parse((getFirstLine(note.title)))}</h3>
                <p className="text-sm text-gray-600 truncate">{parse(getSecondLine(note.description))}</p>
                </div>
        </div>
    )
}

export default NoteCard;
