import React, { useState } from 'react';
import "./styles.css";
import { Note } from './components/Note/Note';

export const App = () => {
  const [notes, setNotes] = useState(() => {
    const notesFromStorage = window.localStorage.getItem('notes')
    if (notesFromStorage) return JSON.parse(notesFromStorage)
    return []
  })

  const addNote = () => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text: "" }])
  }

  const editNote = (newText, id) => {
    const updatedNotes = [...notes];
    const noteIndex = updatedNotes.findIndex((note) => note.id === id);
    if (noteIndex !== -1) {
      updatedNotes[noteIndex] = { id, text: newText };
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  return (
    <div className='container'>
      <button className='add' onClick={addNote}>+ Agregar nota</button>
      {notes.length > 0 && notes.map((note) => (
        <Note key={note.id} val={note.text} id={note.id} onEditNote={editNote} onDeleteNote={deleteNote} />
      ))}
    </div>
  )
}