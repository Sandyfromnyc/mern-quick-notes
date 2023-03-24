import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotesPage({ addNote }) {
  return (

    <NewNoteForm addNote={addNote} />

  );
}