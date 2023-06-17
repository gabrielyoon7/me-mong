import {Container, Stack} from "@mui/material";
import NoteInput from "./components/NoteInput";

function App() {

  return (
    <Container>
      <Stack>
        {/*<MemoList/>*/}
        <NoteInput/>
      </Stack>
    </Container>
  );
}

export default App;
