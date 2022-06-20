/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import NotesItem from "./NotesItem";

function NotesList({ notes }) {
    return (
        <div
            css={css`
        display:flex;
        flex-wrap:wrap;
        
        `}>
            {notes.map((item) => (
                <NotesItem key={item.id} data={item} />
            ))}
        </div>
    );
}
export default NotesList;