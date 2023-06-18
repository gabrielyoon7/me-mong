import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {useState} from "react";
import {modalStore} from "../../store/modalStore.tsx";
import NoteInput from "../NoteInput";

function BottomNavBar() {
  const [value, setValue] = useState(0);

  return (
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
          onClick={() => modalStore.open(
            <NoteInput
              onClose={() => modalStore.close()}
            />
          )}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNavBar;
