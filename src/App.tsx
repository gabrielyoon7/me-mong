import {useState} from "react";
import {BottomNavigation, BottomNavigationAction, Box, Dialog, Paper} from "@mui/material";
import NoteList from "./components/NoteList";
import NoteInput from "./components/NoteInput";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleClose = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Box sx={{pb: 7}}>
        <NoteList/>

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
        <NoteInput onClose={handleClose}/>
      </Dialog>
    </>
  );
}
