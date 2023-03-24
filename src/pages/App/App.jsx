import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MyNotesPage from '../MyNotesPage/MyNotesPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import * as notesAPI from '../../utilities/notes-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

async function addNote(note) {
  const newNote = await notesAPI.create(note)
  setNotes([...notes, newNote])
}

useEffect(function() {
  async function getNotes() {
    const allNotes = await notesAPI.getAll();
    setNotes(allNotes);
  }
  getNotes();
}, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/NewNotesPage" element={<NewNotesPage notes={notes} addNote={addNote} />} />
              <Route path="/MyNotesPage" element={<MyNotesPage notes={notes} />} />

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
