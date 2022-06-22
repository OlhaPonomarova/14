import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";
import Popup from "../Popup";
import useNote from "./hook/useNote";

function Notes() {
    const { addNote, isClosePopup, notes } = useNote();
    return (
        <div>
            <Popup isClosePopup={isClosePopup}>
                <NotesForm onSubmit={addNote} />
            </Popup>
            <NotesList notes={notes} />
        </div>
    );
}

export default Notes;