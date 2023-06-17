import {Note} from "./types/types.ts";
import {useState} from "react";
import {BottomNavigation, BottomNavigationAction, Box, Container, Dialog, Paper} from "@mui/material";
import NoteList from "./components/NoteList";
import NoteInput from "./components/NoteInput";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [noteList, setNoteList] = useState<Note[]>([]);

  const handleClose = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Box sx={{pb: 7}}>
        <Container>
          <NoteList noteList={noteList}/>
        </Container>
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="노트 작성하기"
              icon={<AddCircleIcon/>}
              onClick={handleClose}
            />
          </BottomNavigation>
        </Paper>
      </Box>

      <Dialog open={modalOpen}>
        <NoteInput setNoteList={setNoteList} onClose={handleClose}/>
      </Dialog>
    </>
  );
}
