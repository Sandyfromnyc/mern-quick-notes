import NoteCard from "../../components/NoteCard/NoteCard";

export default function MyNotesPage({ notes }) {
  const AllMyNotes = notes.map((n, idx) => (
    <NoteCard note={n} index={idx} key={idx} />
  ));
    return (
      <>
      <h1>My Notes Page</h1>
        <div>
        {notes.length === 0 ?  <h2>No Notes Yet</h2> : AllMyNotes }
        </div>
      </>
  );
}

