import { ReactNode } from "react";
import Store from "../utils/useExternalStore/Store.ts";

type StoreType = {
  open: boolean;
  component: ReactNode;
}

class ModalStore extends Store<StoreType>{
  constructor(initState: StoreType) {
    super(initState);
  }

  open(component: ReactNode) {
    this.setState({
      open: true,
      component: component
    })
  }

  close() {
    this.setState({
      open: false,
      component: <></>
    })
  }
}

export const modalStore = new ModalStore({
  open: false,
  component: <></>
});
