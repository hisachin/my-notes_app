import NoteToolBar from "./notetoolbar";
import NoteText from "./notetext";

const NoteDetails = () => {
    return (
        <div className="flex flex-col flex-1 gap-2 m-2 text-black">
            <NoteToolBar />
            <NoteText />
        </div>
    )
}

export default NoteDetails;
