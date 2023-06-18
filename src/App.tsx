import {useSyncExternalStore} from "react";
import {Box, Dialog} from "@mui/material";
import NoteList from "./components/NoteList";
import {modalStore} from "./store/modalStore.tsx";
import BottomNavBar from "./components/BottomNavBar";

export default function App() {

  const modal = useSyncExternalStore(modalStore.subscribe, modalStore.getSnapshot);

  return (
    <>
      <Box sx={{pb: 7}}>
        <NoteList/>
        <BottomNavBar/>
      </Box>

      <Dialog open={modal.open}>
        {modal.component}
      </Dialog>
    </>
  );
}
