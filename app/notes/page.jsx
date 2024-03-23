import NotesLayout from "./layout";
import SideBar from "./components/sidebar";
import NoteList from "./components/notelist";
import NoteDetails from "./components/nodedetails";

import { NoteProvider } from "./contexts/noteContexts";

export default function Notes() {
    return (
        <NotesLayout>
            <SideBar />
            <NoteProvider>
                <NoteList />
                <NoteDetails />
            </NoteProvider>
        </NotesLayout>
    );
}
