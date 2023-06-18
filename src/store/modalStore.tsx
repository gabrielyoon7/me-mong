import {ReactNode} from "react";

interface Modal {
  open: boolean;
  component: ReactNode
}

let modal: Modal = {
  open: false,
  component: <></>
}

let listeners: Array<() => void> = [];

export const modalStore = {
  open: (component: ReactNode) => {
    modal = {
      open: true,
      component: component
    }
    emitChange();
  },
  close: () => {
    modal = {
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
    return modal;
  },
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
