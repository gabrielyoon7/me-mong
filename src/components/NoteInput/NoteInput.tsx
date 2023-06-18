import {Box, Button, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {NoteForm} from "../../types/types.ts";
import {noteStore} from "../../store/noteStore.ts";


interface NoteInputProps {
  onClose: () => void;
}

function NoteInput({onClose}: NoteInputProps) {
  const [newNote, setNewNote] = useState<NoteForm>({
    title: "",
    content: ""
  });

  const handleNewMemo = () => {
    noteStore.addNote(newNote);
    onClose();
  };

  return (
    <Box p={2}>
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
        <Stack direction="row" gap={1}>
          <Button
            variant="contained"
            onClick={onClose}
            color="error"
            fullWidth
          >
            닫기
          </Button>
          <Button
            variant="contained"
            onClick={handleNewMemo}
            color="success"
            fullWidth
          >
            추가
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default NoteInput;
