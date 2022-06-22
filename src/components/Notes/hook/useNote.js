import { useState } from "react";
import dataNotes from "../../../notes.json";
import { useStorage } from "../../../shared";

const useNote = () => {
    const { setJsonItem, getJsonItem } = useStorage();

    if (!getJsonItem("notes")) {
        setJsonItem("notes", dataNotes);
    }

    const [notes, setNotes] = useState(getJsonItem("notes"));
    const [isClosePopup, setIsClosePopup] = useState(false);

    const addNote = (event) => {
        event.preventDefault();

        const data = {
            id: Math.floor(Math.random() * 1000),
            title: event.target.notetitle.value,
            description: event.target.notedescription.value,
            date: new Date().toLocaleDateString(),
        };

        const newNote = [...notes, data];

        setJsonItem("notes", newNote);

        setNotes(newNote);

        setIsClosePopup(true);

        setTimeout(() => {
            setIsClosePopup(false);
        }, 1000);
    };
    return {
        isClosePopup,
        addNote,
        notes,
    };
};

export default useNote;