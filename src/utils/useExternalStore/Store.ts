export interface IStore<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
}

class Store<T> implements IStore<T> {
  private listeners: Array<() => void> = [];

  subscribe = (listener: () => void) => {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  emitChange = () => {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

export default Store;
