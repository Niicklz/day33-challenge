import React from 'react'
import "./Note.css"
import {BsFillTrashFill} from "react-icons/bs";
import {PiNotePencilBold} from "react-icons/pi";

export const Note = () => {
  return (
    <article className='note-container'>
        <header>
            <button className="edit"><PiNotePencilBold/></button>
            <button className="delete"><BsFillTrashFill/></button>
        </header>
        <textarea name="" spellcheck="false" id="" cols="30" rows="10"></textarea>
    </article>
  )
}
