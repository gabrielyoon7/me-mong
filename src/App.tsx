import {Container, Stack} from "@mui/material";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import {useState} from "react";
import {Note} from "./types/types.ts";

function App() {

  const [noteList, setNoteList] = useState<Note[]>([]);

  return (
    <Container>
      <Stack>
        <NoteList noteList={noteList}/>
        <NoteInput setNoteList={setNoteList}/>
      </Stack>
    </Container>
  );
}

export default App;
