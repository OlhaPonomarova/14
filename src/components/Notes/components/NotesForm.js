/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function NotesForm({ onSubmit }) {
    return (
        <form
            onSubmit={onSubmit}
            css={css`
        width: 300px;
        padding: 30px 15px;
        background-color:#e5dddd;
        input,
        textarea {
          background-color:#e5dddd;
          border: 1px solid black;
          padding: 15px;
          margin-bottom: 15px;
          width: 100%;
          box-sizing: border-box;
        }
      `}
        >
            <input name="notetitle" type="text" placeholder="Enter note title" />
            <textarea
                name="notedescription"
                type="text"
                placeholder="Enter note description"
                rows="5"
            />
            <button
                data-status="close"
                css={css`
          padding: 5px 20px;
          cursor: pointer;
          float: right;
          background-color: #e5dddd;
          font-weight: bold;
        `}
            >
                Add
            </button>
        </form>
    );
}

export default NotesForm;