import NoteCard from "../NoteCard";
import { noteStore } from "../../store/noteStore.ts";
import { Button, Container } from "@mui/material";
import SuperBigAlert from "../SuperBigAlert";
import useExternalState from "../../hooks/useExternalState.ts";
import { Note } from "../../types/types.ts";

function NoteList() {


  const [noteList, setNoteList] = useExternalState<Note[]>(noteStore);

  if (noteList.length === 0) {
    return (
      <SuperBigAlert title="텅" message="작성된 노트가 없습니다." />
    )
  }

  return (
    <Container>
      <Button onClick={() => setNoteList([])}>모든 노트 제거</Button>
      {noteList.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </Container>
  )
}

export default NoteList;
