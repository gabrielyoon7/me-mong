import { Box } from "@mui/material";
import NoteList from "./components/NoteList";
import BottomNavBar from "./components/BottomNavBar";
import Modal from "./components/Modal";
import BottomSheet from "./components/BottomSheet";

export default function App() {

  return (
    <>
      <Box sx={{ pb: 7 }}>
        <NoteList />
        <BottomNavBar />
      </Box>
      <Modal />
      <BottomSheet />
    </>
  );
}
