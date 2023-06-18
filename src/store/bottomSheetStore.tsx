import {ReactNode} from "react";

interface BottomSheet {
  open: boolean;
  component: ReactNode
}

let bottomSheet: BottomSheet = {
  open: false,
  component: <></>
}

let listeners: Array<() => void> = [];

export const bottomSheetStore = {
  open: (component: ReactNode) => {
    bottomSheet = {
      open: true,
      component: component
    }
    emitChange();
  },
  close: () => {
    bottomSheet = {
      open: false,
      component: <></>
    }
    emitChange();
  },
  subscribe: (listener: () => void) => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot: () => {
    return bottomSheet;
  },
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
