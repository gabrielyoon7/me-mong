import {Button, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {NoteForm} from "../../types/types.ts";

function NoteInput() {
  const [newNote, setNewNote] = useState<NoteForm>({
    title: "",
    content: ""
  });

  const handleNewMemo = () => {
    console.log(newNote);
  };

  return (
    <Stack gap={1}>
      <TextField
        id="title"
        label="제목"
        variant="outlined"
        value={newNote.title}
        onChange={(e) => setNewNote((prevState) => ({...prevState, title: e.target.value}))}
      />
      <TextField
        id="content"
        label="내용"
        variant="outlined"
        value={newNote.content}
        onChange={(e) => setNewNote((prevState) => ({...prevState, content: e.target.value}))}
      />
      <Button variant="contained" onClick={handleNewMemo}>추가</Button>
    </Stack>
  );
}

export default NoteInput;
