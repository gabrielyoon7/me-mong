import {Note} from "../../types/types.ts";

interface NoteListProps {
  noteList: Note[]
}

function NoteList({noteList}: NoteListProps) {
  return (
    <>
      {noteList.map(note => <div key={note.id}>{note.content}</div>)}
    </>
  )
}

export default NoteList;
