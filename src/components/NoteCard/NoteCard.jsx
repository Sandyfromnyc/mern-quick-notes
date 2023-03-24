

export default function NoteCard({ note, date }) {
  return (

    <div> 
       <p> {note.note}  </p> 
        <p>{new Date(note.createdAt).toLocaleString()}</p>
        

    </div>

  )
}