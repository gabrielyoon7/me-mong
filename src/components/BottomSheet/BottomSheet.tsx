import {useSyncExternalStore} from "react";
import {bottomSheetStore} from "../../store/bottomSheetStore.tsx";
import {Drawer} from "@mui/material";

function BottomSheet() {
  const bottomSheet = useSyncExternalStore(bottomSheetStore.subscribe, bottomSheetStore.getSnapshot);

  return (
    <Drawer
      anchor="bottom"
      open={bottomSheet.open}
      onClose={() => bottomSheetStore.close()}
    >
      {bottomSheet.component}
    </Drawer>
  )
}

export default BottomSheet;
