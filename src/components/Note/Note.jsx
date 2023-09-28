import { useEffect, useState } from "react";
import "./Note.css";
import { BsFillTrashFill } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";

export const Note = ({ val, id, onEditNote, onDeleteNote }) => {
  const [textareaValue, setTextareaValue] = useState(val || "");

  const editNote = () => {
    onEditNote(textareaValue, id);
  };

  const deleteNote = () => {
    onDeleteNote(id);
  };

  return (
    <article className="note-container">
      <header>
        <button className="edit">
          <PiNotePencilBold className="icon" onClick={editNote} />
        </button>
        <button className="delete">
          <BsFillTrashFill className="icon" onClick={deleteNote} />
        </button>
      </header>
      <textarea
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        name=""
        spellCheck="false"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </article>
  );
};