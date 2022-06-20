/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import notes from "./notes.json";
import NotesList from "./components/NotesList";

function App() {

  return (
    <div
    css={css`
        max-width:1200px ;
        margin:auto ;
      `}>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
