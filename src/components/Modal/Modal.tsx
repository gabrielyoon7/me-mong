import {Dialog} from "@mui/material";
import {useSyncExternalStore} from "react";
import {modalStore} from "../../store/modalStore.tsx";

function Modal() {
  const modal = useSyncExternalStore(modalStore.subscribe, modalStore.getSnapshot);

  return (
    <Dialog open={modal.open}>
      {modal.component}
    </Dialog>
  )
}

export default Modal;
