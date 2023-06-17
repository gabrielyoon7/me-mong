import {Note} from "../../types/types.ts";
import NoteCard from "../NoteCard";

interface NoteListProps {
  noteList: Note[]
}

function NoteList({noteList}: NoteListProps) {
  return (
    <>
      {noteList.map(note => (
        <NoteCard key={note.id} note={note}/>
      ))}
    </>
  )
}

export default NoteList;
