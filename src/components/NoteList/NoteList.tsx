import NoteCard from "../NoteCard";
import {useSyncExternalStore} from "react";
import {noteStore} from "../../store/noteStore.ts";
import {Container} from "@mui/material";

function NoteList() {
  const noteList = useSyncExternalStore(noteStore.subscribe, noteStore.getSnapshot);

  return (
    <Container>
      {noteList.map(note => (
        <NoteCard key={note.id} note={note}/>
      ))}
    </Container>
  )
}

export default NoteList;
