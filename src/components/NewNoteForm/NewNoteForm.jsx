import { useState } from "react";
import { useNavigate } from "react-router";

export default function NewNoteForm({ addNote }) {
  const [newNote, setNewNote] = useState({note: ''});

  const navigate = useNavigate();

  
  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote({note: ''});
    navigate('/MyNotesPage')
  }
  
  function handleChange(evt) {
    setNewNote({...newNote, [evt.target.name]: evt.target.value})
  }

    return (
        <>

        <hr>
        </hr>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add A New Note" name='note' onChange={handleChange} value={newNote.note} />
          <button type='submit'>Add A New Note</button>

        </form>
        
        </>


    )

}