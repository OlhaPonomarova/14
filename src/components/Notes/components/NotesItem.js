/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NotesItem = ({ data: { title, date, description } }) => (
  <div
    css={css`
      width: 320px;
      padding: 5px ;
      margin: 15px;
      background-color:  #e5dddd;
      
      h2,
      p {
        border: 1px solid black;
        padding: 10px 15px;
        font-size: 20px;
      }
        
    `}>
    <h2>{title}</h2>
    <p>{date}</p>
    <p>{description}</p>
  </div>
);
export default NotesItem;