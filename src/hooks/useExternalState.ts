import { useSyncExternalStore } from "react";
import { IStore } from "../utils/useExternalStore/Store";

type ReturnTypeUseExternalState<T> = [T, (newState: T) => void];

const useExternalState = <T>(store: IStore<T>): ReturnTypeUseExternalState<T> => {
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return [state, store.setState];
}

export default useExternalState;
