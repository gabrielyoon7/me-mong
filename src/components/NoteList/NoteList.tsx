import NoteCard from "../NoteCard";
import {useSyncExternalStore} from "react";
import {noteStore} from "../../store/noteStore.ts";
import {Container} from "@mui/material";
import SuperBigAlert from "../SuperBigAlert";

function NoteList() {
  const noteList = useSyncExternalStore(noteStore.subscribe, noteStore.getSnapshot);

  if (noteList.length === 0) {
    return (
      <SuperBigAlert title="텅" message="작성된 노트가 없습니다."/>
    )
  }

  return (
    <Container>
      {noteList.map(note => (
        <NoteCard key={note.id} note={note}/>
      ))}
    </Container>
  )
}

export default NoteList;
