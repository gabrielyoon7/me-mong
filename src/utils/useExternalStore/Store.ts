interface IStore<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
  setState: (newState: T) => void;
  getSnapshot: () => T;
}

class Store<T> implements IStore<T> {
  private listeners: Array<() => void> = [];
  public state: T;

  constructor(initValue: T) {
    this.state = initValue;
  }

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

  setState = (newState: T) => {
    this.state = newState;
    this.emitChange();
  }

  getSnapshot = () => {
    return this.state;
  };
}

export default Store;
